import StatsCard from '@/components/molecules/StatsCard';
import { Activity, Bot, TrendingUp, Zap } from 'lucide-react';
import React from 'react'

const MetricsData = () => {
  const aiStats = [
    {
      title: "AI Propensity Score",
      value: "P2C: 68",
      subText: "Avg. payment propensity",
      Icon: Activity,
      variant: "solid",
      color: "blue"
    },
    {
      title: "Sentiment Score",
      value: "72%",
      subText: "Positive interactions",
      Icon: Bot,
      variant: "solid",
      color: "purple"
    },
    {
      title: "Recovery Rate",
      value: "18.5%",
      subText: "This month",
      Icon: TrendingUp,
      variant: "solid",
      color: "green"
    },
    {
      title: "Avg ROI",
      value: "95x",
      subText: "Return on investment",
      Icon: Zap,
      variant: "solid",
      color: "orange"
    }
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {aiStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}

export default MetricsData
