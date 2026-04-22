"use client"
import React from 'react'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ChannelPerformance = () => {
    const channelPerformance = [
  { channel: "AI Bot", recovery: 325000, cost: 2280, roi: 14250 },
  { channel: "Tele-calling", recovery: 130000, cost: 2100, roi: 6190 },
  { channel: "Field Visit", recovery: 125000, cost: 1400, roi: 8929 },
];
const riskDistribution = [
  { name: "Low Risk (0-50)", value: 245, color: "#10b981" },
  { name: "Medium Risk (51-75)", value: 412, color: "#f59e0b" },
  { name: "High Risk (76-100)", value: 588, color: "#ef4444" },
];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
        <div className="bg-custom-dark rounded">
          <h3 className="mb-4 h1">Channel Performance vs Cost</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="channel" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
              <Tooltip
                formatter={(value, name) =>
  name === "recovery"
    ? `₹${(value / 1000).toFixed(0)}K`
    : name === "cost"
    ? `₹${value}`
    : `${value}x`
}
                contentStyle={{ backgroundColor: '#161b2e', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#9ca3af' }}
              />
              <Bar yAxisId="left" dataKey="recovery" fill="#10b981" name="Recovery" />
              <Bar yAxisId="right" dataKey="roi" fill="#8b5cf6" name="ROI" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#161b2e] rounded-lg border border-gray-800 p-6">
          <h3 className="h1 mb-4">Risk Score Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {riskDistribution.map((entry, index) => (
                  <Cell key={`risk-cell-${index}-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#161b2e', border: '1px solid #374151', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default ChannelPerformance
