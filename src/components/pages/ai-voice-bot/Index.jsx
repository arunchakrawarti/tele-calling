"use client"
import React from 'react'
import {
  Phone,
  CheckCircle,
  Calendar,
  DollarSign
} from "lucide-react";
import Heading from '@/components/atoms/Heading';
import ChartsSection from './ChartsSection';
import SentimentSection from './SentimentSection';
import BotConfig from './BotConfig';
import StatsCard from '@/components/molecules/StatsCard';

const MainAIVoice = () => {
    const statsData = [
    {
      title: "Total Calls",
      value: "1,284",
      trend: "+12%",
      isPositive: true,
      Icon: Phone
    },
    {
      title: "Connected Calls",
      value: "942",
      trend: "73%",
      isPositive: true,
      Icon: CheckCircle
    },
    {
      title: "PTPs Given",
      value: "287",
      trend: "₹28.5L",
      isPositive: true,
      Icon: Calendar
    },
    {
      title: "Recovery Today",
      value: "₹12.5L",
      trend: "+8%",
      isPositive: true,
      Icon: DollarSign
    }
  ];
  return (
    <div>
        <Heading
        title="AI Voice Bot Dashboard"
        paragraph="Monitor AI bot performance"
        actions={[
          { text: "Configure Bot", icon: "Settings", variant: "outline" },
          { text: "Start Campaign", icon: "Play", variant: "primary" }
        ]}
      />
       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {statsData.map((item, i) => (
        <StatsCard key={i} {...item} />
      ))}
    </div>
    <ChartsSection/>
    <SentimentSection/>
    <BotConfig/>
    </div>
  )
}

export default MainAIVoice;
