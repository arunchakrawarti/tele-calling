import StatsCard from '@/components/molecules/StatsCard';
import {
  Phone,
  Clock,
} from "lucide-react";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <StatsCard 
            key={index}
            title={item.title}
            value={item.value}
            trend={item.trend}
            isPositive={item.isPositive}
            Icon={item.icon}
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
const stats = [
    { title: "Total Calls", value: "247", trend: "+12%", isPositive: true, icon: Phone },
    { title: "Answered", value: "189", trend: "+8%", isPositive: true, icon: Phone },
    { title: "Missed", value: "58", trend: "-15%", isPositive: false, icon: Phone },
    { title: "Avg Duration", value: "4:32", trend: "+5%", isPositive: true, icon: Clock },
  ];