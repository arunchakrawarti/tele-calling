"use client"
import React from 'react'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const SentimentAnalytics = () => {
    const sentimentTrends = [
  { category: "Positive", score: 65 },
  { category: "Engagement", score: 72 },
  { category: "Cooperation", score: 58 },
  { category: "Payment Intent", score: 68 },
  { category: "Responsiveness", score: 55 },
];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
        <div className="bg-custom-dark rounded-lg border border-gray-800 p-6">
          <h3 className="mb-4 h1">Customer Sentiment Radar</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={sentimentTrends}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="category" stroke="#9ca3af" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9ca3af" />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
              />
              <Tooltip contentStyle={{ backgroundColor: '#161b2e', border: '1px solid #374151', borderRadius: '8px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-custom-dark rounded">
          <h3 className="h1 mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-green-400">
                    Increase AI Bot Allocation
                  </p>
                  <p className="text-sm text-green-300/80 mt-1">
                    AI bot shows highest ROI (142x). Recommend shifting 30% of tele-calling
                    workload to AI for DPD 30-60 segment.
                  </p>
                  <p className="text-xs text-green-400/70 mt-2">
                    Expected impact: +₹2.5L monthly recovery, -₹45K costs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-400">
                    Focus on Mumbai & Delhi
                  </p>
                  <p className="text-sm text-blue-300/80 mt-1">
                    These cities show 40% higher recovery rates. Allocate more resources
                    and deploy field agents strategically.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-purple-400">
                    High Risk Customers Need Field Visits
                  </p>
                  <p className="text-sm text-purple-300/80 mt-1">
                    588 customers with risk score &gt;75. AI suggests direct field intervention
                    for DPD 90+ to improve recovery by 35%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SentimentAnalytics
