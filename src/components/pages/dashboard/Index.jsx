import StatsCard from '@/components/molecules/StatsCard';
import { Phone, PhoneIncoming, PhoneMissed, Clock } from 'lucide-react';
import React from 'react'
import Profile from './Profile';
import Efficiency from './Efficiency';
import TodayStatsCard from './TodayStatsCard';
import CallsOverviewChart from './CallsOverviewChart';
import CallDisposition from './CallDisposition';
import RealTimeAlerts from './RealTimeAlerts';
import RecentPayments from './RecentPayments';
import QuickActions from './QuickActions';

const Mainhome = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {callStats.map((stat, index) => (
          <StatsCard 
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            isPositive={stat.isPositive}
            Icon={stat.Icon}
            color={stat.color}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Profile />
        <Efficiency />
        <TodayStatsCard />
      </div>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <CallsOverviewChart/>
        <CallDisposition/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
  <RealTimeAlerts />
  <RecentPayments />
</div>
<QuickActions/>
    </div>
  )
}

export default Mainhome
const callStats = [
    {
      title: "Total Calls",
      value: "247",
      trend: "+12%",
      isPositive: true,
      Icon: Phone,
      color: "blue"
    },
    {
      title: "Answered",
      value: "189",
      trend: "+8%",
      isPositive: true,
      Icon: PhoneIncoming,
      color: "cyan"
    },
    {
      title: "Missed",
      value: "58",
      trend: "-15%",
      isPositive: false,
      Icon: PhoneMissed,
      color: "purple"
    },
    {
      title: "Avg Duration",
      value: "4:32",
      trend: "+5%",
      isPositive: true,
      Icon: Clock,
      color: "teal"
    }
  ];