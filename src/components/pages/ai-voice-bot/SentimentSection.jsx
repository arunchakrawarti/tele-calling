"use client";
import React from "react";
import { Play } from "lucide-react";

// ✅ Data sab upar
const sentimentData = [
  { name: "Positive", value: 156, color: "#10b981" },
  { name: "Neutral", value: 112, color: "#6b7280" },
  { name: "Negative", value: 32, color: "#ef4444" },
];

const recentCalls = [
  {
    id: "CALL456",
    customer: "Rajesh Kumar",
    time: "2 mins ago",
    outcome: "PTP Given",
    sentiment: "Positive",
  },
  {
    id: "CALL455",
    customer: "Amit Patel",
    time: "8 mins ago",
    outcome: "Call Back Later",
    sentiment: "Neutral",
  },
  {
    id: "CALL454",
    customer: "Sneha Reddy",
    time: "15 mins ago",
    outcome: "PTP Given",
    sentiment: "Positive",
  },
  {
    id: "CALL453",
    customer: "Kavita Joshi",
    time: "22 mins ago",
    outcome: "No Answer",
    sentiment: "N/A",
  },
];
const sentimentStyles = {
  Positive: "bg-green-500/20 text-green-400 border border-green-500/30",
  Neutral: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
  Negative: "bg-red-500/20 text-red-400 border border-red-500/30",
  "N/A": "bg-gray-500/20 text-gray-400 border border-gray-500/30",
};

const SentimentSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
      <div className="bg-custom-dark rounded">
        <h3 className="h1 mb-4">
          Sentiment Analysis
        </h3>

        <div className="space-y-4">
          {sentimentData.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between mb-1">
                <span className="text-responsive">
                  {item.name}
                </span>
                <span className="text-sm text-gray-400">
                  {item.value} calls
                </span>
              </div>

              <div className="w-full bg-[#0f1419] rounded-full h-3">
                <div
                  className="h-3 rounded-full"
                  style={{
                    width: `${(item.value / 300) * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="font-semibold text-red-400 mb-1">
            ⚠️ Alert: Angry Customer
          </p>
          <p className="text-sm text-red-300">
            Call ID #4521 - Vikram Singh detected high anger. Agent intervention
            recommended.
          </p>
          <button className="mt-2 text-sm text-red-400 font-medium hover:text-red-300">
            Listen to Recording →
          </button>
        </div>
      </div>
      <div className="bg-custom-dark rounded">
        <h3 className="h1 mb-4">
          Recent Calls
        </h3>

        <div className="space-y-3">
          {recentCalls.map((call) => (
            <div
              key={call.id}
              className="p-3 border border-white/10 rounded-lg hover:border-white/20 bg-[#0f1419]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-responsive">{call.customer}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {call.id} • {call.time}
                  </p>
                </div>

                <button className="p-1 hover:bg-white/5">
                  <Play className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {call.outcome}
                </span>

                <span
                  className={`inline-flex px-2 py-1 rounded-full text-xs ${sentimentStyles[call.sentiment]}`}
                >
                  {call.sentiment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SentimentSection;