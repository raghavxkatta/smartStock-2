from flask import Flask, request, jsonify
from flask_cors import CORS
from predictor import (
    download_stock_data,
    create_windowed_data,
    train_model,
    predict_next
)
from sklearn.preprocessing import MinMaxScaler
import numpy as np

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for React frontend

@app.route('/predict', methods=['GET'])
def predict():
    # Read query parameters
    ticker = request.args.get('ticker', 'AAPL')
    period = request.args.get('period', '1y')
    interval = request.args.get('interval', '1d')

    try:
        # Download and preprocess stock data
        df = download_stock_data(ticker, period, interval)
        scaler = MinMaxScaler()
        data_scaled = scaler.fit_transform(df[['Close']])

        # Prepare windowed sequences
        X, y = create_windowed_data(data_scaled, window_size=20)
        X = X.reshape(X.shape[0], X.shape[1])  # Flatten for sklearn
        split = int(len(X) * 0.95)
        X_train, y_train = X[:split], y[:split]
        X_test, y_test = X[split:], y[split:]

        # Train the model and predict
        model = train_model(X_train, y_train)
        predicted_price, trend = predict_next(model, X_test, y_test[-1], scaler)

        # Return result as JSON
        return jsonify({
            "ticker": ticker.upper(),
            "predicted_price": round(predicted_price, 2),
            "trend": trend
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
