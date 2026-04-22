"use client"
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RecoveryForecast = () => {
  const recoveryForecast = [
    { month: "Apr", actual: 8500000, forecast: 9200000 },
    { month: "May", actual: 0, forecast: 11500000 },
    { month: "Jun", actual: 0, forecast: 13200000 },
    { month: "Jul", actual: 0, forecast: 14800000 },
  ];
  return (
    <div>
      <div className="bg-custom-dark rounded mt-5">
        <h3 className="h1 mb-4">
          Recovery Forecast (AI Predicted)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={recoveryForecast} id="analytics-forecast-chart">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              formatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
              contentStyle={{
                backgroundColor: "#161b2e",
                border: "1px solid #374151",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={3}
              name="Actual Recovery"
            />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#3b82f6"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="AI Forecast"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="font-semibold text-blue-400 mb-1">📊 AI Insight</p>
          <p className="text-sm text-blue-300">
            Based on current trends, historical data, and PTP analysis, we
            forecast ₹11.5L recovery in May (25% increase). High confidence: DPD
            30-60 segment showing strong engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoveryForecast;
