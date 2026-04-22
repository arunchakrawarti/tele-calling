"use client"
import React from 'react'
import { Phone, CheckCircle2, Calendar, DollarSign } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import ChartsSection from './ChartsSection';
import SentimentSection from './SentimentSection';
import BotConfig from './BotConfig';
import StatsCard from '@/components/molecules/StatsCard';

const MainAIVoice = () => {
  const recoveryStats = [
    {
      title: "Total Calls",
      value: "1,284",
      trend: "+12%",
      trendLabel: "from yesterday",
      isPositive: true,
      Icon: Phone,
      color: "blue"
    },
    {
      title: "Connected Calls",
      value: "942",
      subText: "73% connection rate", 
      Icon: CheckCircle2,
      color: "green"
    },
    {
      title: "PTPs Given",
      value: "287",
      subText: "₹28.5L committed", 
      Icon: Calendar,
      color: "purple"
    },
    {
      title: "Recovery Today",
      value: "₹12.5L",
      trend: "+8%",
      trendLabel: "from target", 
      isPositive: true,
      Icon: DollarSign,
      color: "green"
    }
  ];
  return (
    <div>
        <Heading
        title="AI Voice Bot Dashboard"
        paragraph="Monitor AI bot performance"
        actions={[
          { text: "Configure Bot", icon: "Settings", variant: "outline" },
          { text: "Start Campaign", icon: "Play", variant: "success" }
        ]}
      />
       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recoveryStats.map((stat, index) => (
          <StatsCard 
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendLabel={stat.trendLabel}
            subText={stat.subText}
            isPositive={stat.isPositive}
            Icon={stat.Icon}
            color={stat.color}
          />
        ))}
    </div>
    <ChartsSection/>
    <SentimentSection/>
    <BotConfig/>
    </div>
  )
}

export default MainAIVoice;
