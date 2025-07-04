import yfinance as yf
import numpy as np
from sklearn.ensemble import RandomForestRegressor

def download_stock_data(symbol, period="1y", interval="1d"):
    data = yf.download(symbol, period=period, interval=interval)
    if data.empty:
        raise ValueError("No data found for the given ticker.")
    return data[['Close']]

def create_windowed_data(data_scaled, window_size=20):
    X, y = [], []
    for i in range(window_size, len(data_scaled)):
        X.append(data_scaled[i - window_size:i])
        y.append(data_scaled[i])
    return np.array(X), np.array(y)

def train_model(X_train, y_train):
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    return model

def predict_next(model, X_test, y_last_scaled, scaler, threshold=0.002):
    pred_scaled = model.predict(X_test[-1].reshape(1, -1))[0]
    predicted_price = scaler.inverse_transform([[pred_scaled]])[0][0]
    last_real_price = scaler.inverse_transform([[y_last_scaled]])[0][0]

    change = (predicted_price - last_real_price) / last_real_price

    if change > threshold:
        trend = "Up"
    elif change < -threshold:
        trend = "Down"
    else:
        trend = "Neutral"

    return predicted_price, trend
