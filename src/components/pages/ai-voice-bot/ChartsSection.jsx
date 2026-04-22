import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const callData = [
  { hour: "9 AM", calls: 45, connected: 32 },
  { hour: "10 AM", calls: 58, connected: 41 },
  { hour: "11 AM", calls: 62, connected: 48 },
  { hour: "12 PM", calls: 51, connected: 38 },
  { hour: "1 PM", calls: 38, connected: 25 },
  { hour: "2 PM", calls: 55, connected: 42 },
  { hour: "3 PM", calls: 64, connected: 51 },
  { hour: "4 PM", calls: 58, connected: 45 },
];

const outcomeData = [
  { name: "PTP Given", value: 125, color: "#10b981" },
  { name: "Call Back Later", value: 85, color: "#f59e0b" },
  { name: "Refused", value: 42, color: "#ef4444" },
  { name: "No Answer", value: 98, color: "#6b7280" },
];

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">

      <div className="bg-custom-dark rounded-lg border border-white/10 p-6">
          <h3 className="h1 mb-4 ">Hourly Call Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={callData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="calls"
                stackId="calls-stack"
                stroke="#8b5cf6"
                fill="#c4b5fd"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="connected"
                stackId="connected-stack"
                stroke="#10b981"
                fill="#86efac"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
       <div className="bg-[#161b2e] rounded-lg border border-white/10 p-6">
          <h3 className=" mb-4 h1">Call Outcomes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={outcomeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {outcomeData.map((entry, index) => (
                  <Cell key={`outcome-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

    </div>
  );
};

export default ChartsSection;