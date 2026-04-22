import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PerformanceOverview = () => {
  const weeklyData = [
    { week: "Week 1", recovery: 2100000, calls: 1245, ptps: 156 },
    { week: "Week 2", recovery: 2450000, calls: 1389, ptps: 178 },
    { week: "Week 3", recovery: 2280000, calls: 1298, ptps: 165 },
    { week: "Week 4", recovery: 2650000, calls: 1456, ptps: 192 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
      <div className="bg-custom-dark  rounded">
        <h3 className="h1 mb-4">
          Monthly Performance Overview
        </h3>

        <h4 className="font-medium text-gray-300 mb-3">
          Weekly Recovery Trend
        </h4>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="week" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />

            <Tooltip
              formatter={(value) =>
                `₹${(value / 100000).toFixed(1)}L`
              }
              contentStyle={{
                backgroundColor: "#161b2e",
                border: "1px solid #374151",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />

            <Line
              type="monotone"
              dataKey="recovery"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-custom-dark  rounded">

        <h4 className="h1 mb-4">
          Weekly Activity
        </h4>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="week" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#161b2e",
                border: "1px solid #374151",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />

            <Bar dataKey="calls" fill="#3b82f6" name="Calls" />
            <Bar dataKey="ptps" fill="#8b5cf6" name="PTPs" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default PerformanceOverview;