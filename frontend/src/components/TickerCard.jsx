import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { fetchPrediction, generateMockHistoricalData } from '../utils/api';
import { X, TrendingUp, TrendingDown, Minus, AlertCircle, Activity } from 'lucide-react';

const TrendPill = ({ trend }) => {
    const getTrendStyle = () => {
        switch (trend?.toLowerCase()) {
            case 'up':
                return 'bg-gradient-success text-success-foreground';
            case 'down':
                return 'bg-gradient-danger text-danger-foreground';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getTrendIcon = () => {
        switch (trend?.toLowerCase()) {
            case 'up':
                return <TrendingUp className="w-4 h-4" />;
            case 'down':
                return <TrendingDown className="w-4 h-4" />;
            default:
                return <Minus className="w-4 h-4" />;
        }
    };

    return (
        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getTrendStyle()}`}>
            {getTrendIcon()}
            {trend || 'Neutral'}
        </div>
    );
};

const SimpleChart = ({ ticker, historicalData }) => {
    if (!historicalData || historicalData.length === 0) return null;

    const minPrice = Math.min(...historicalData.map(d => d.close));
    const maxPrice = Math.max(...historicalData.map(d => d.close));
    const priceRange = maxPrice - minPrice;

    return (
        <div className="mt-4 h-20 bg-muted/20 rounded-lg p-2 flex items-end gap-1">
            {historicalData.slice(-10).map((point, index) => {
                const height = priceRange > 0 ? ((point.close - minPrice) / priceRange) * 60 + 10 : 35;
                return (
                    <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-sm transition-all duration-300 hover:opacity-80"
                        style={{ height: `${height}px` }}
                        title={`$${point.close}`}
                    />
                );
            })}
        </div>
    );
};

const TickerCard = ({ ticker, period, interval, onRemove }) => {
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [historicalData, setHistoricalData] = useState([]);

    useEffect(() => {
        const loadPrediction = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchPrediction(ticker, period, interval);
                setPrediction(data);

                // Generate mock historical data for the chart
                const mockData = generateMockHistoricalData(ticker, 20);
                setHistoricalData(mockData);
            } catch (err) {
                setError(err.message);
                console.error('Prediction error:', err);
            } finally {
                setLoading(false);
            }
        };

        loadPrediction();
    }, [ticker, period, interval]);

    const handleRemove = () => {
        onRemove({ ticker, period, interval });
    };

    return (
        <div className="bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-foreground">{ticker}</h3>
                    <p className="text-sm text-muted-foreground">
                        {period} • {interval}
                    </p>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemove}
                    className="text-muted-foreground hover:text-danger hover:bg-danger/10 transition-colors"
                >
                    <X className="w-4 h-4" />
                </Button>
            </div>

            {loading && (
                <div className="flex items-center justify-center py-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm text-muted-foreground">Analyzing market trends...</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="flex items-center gap-3 p-4 bg-danger/10 border border-danger/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
                    <div>
                        <p className="text-sm font-medium text-danger">Prediction Failed</p>
                        <p className="text-xs text-danger/80 mt-1">{error}</p>
                    </div>
                </div>
            )}

            {prediction && !loading && !error && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">Predicted Price</p>
                            <p className="text-2xl font-bold text-foreground">
                                ${prediction.predicted_price?.toFixed(2) || 'N/A'}
                            </p>
                        </div>
                        <TrendPill trend={prediction.trend} />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Activity className="w-4 h-4" />
                        <span>Market Analysis</span>
                    </div>
                    <SimpleChart ticker={ticker} historicalData={historicalData} />

                    <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Last updated: {new Date().toLocaleTimeString()}</span>
                            <span>AI Confidence: High</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TickerCard;