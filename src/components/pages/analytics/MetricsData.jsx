import { Activity, Bot, TrendingUp } from 'lucide-react'
import React from 'react'

const MetricsData = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-blue-100">AI Propensity Score</p>
            <Activity className="w-5 h-5 text-blue-100" />
          </div>
          <p className="text-3xl font-bold">P2C: 68</p>
          <p className="text-sm text-blue-100 mt-1">Avg. payment propensity</p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-purple-100">Sentiment Score</p>
            <Bot className="w-5 h-5 text-purple-100" />
          </div>
          <p className="text-3xl font-bold">72%</p>
          <p className="text-sm text-purple-100 mt-1">Positive interactions</p>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-green-100">Recovery Rate</p>
            <TrendingUp className="w-5 h-5 text-green-100" />
          </div>
          <p className="text-3xl font-bold">18.5%</p>
          <p className="text-sm text-green-100 mt-1">This month</p>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-orange-100">Avg ROI</p>
            <TrendingUp className="w-5 h-5 text-orange-100" />
          </div>
          <p className="text-3xl font-bold">95x</p>
          <p className="text-sm text-orange-100 mt-1">Return on investment</p>
        </div>
      </div>
    </div>
  )
}

export default MetricsData
