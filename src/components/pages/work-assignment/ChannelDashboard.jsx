"use client"
import React from 'react'
import { Users, Zap, MapPin } from 'lucide-react'; 
import ProgressCard from '@/components/molecules/ProgressCard';

const ChannelDashboard = () => {
    
  const progressData = [
    {
      title: "AI Voice Bot",
      description: "Automated voice calls with natural language processing",
      icon: Zap,
      capacity: 250,
      totalCapacity: 500,
      cost: 5,
      iconBg: "bg-purple-900/30", 
      iconColor: "text-purple-400", 
      progressColor: "bg-purple-600", 
    },
    {
      title: "Tele-calling Team",
      description: "Human agents for personalized conversations",
      icon: Users,
      capacity: 50,
      totalCapacity: 100,
      cost: 50,
      iconBg: "bg-green-900/30",
      iconColor: "text-green-300",
      progressColor: "bg-green-500",
    },
    {
      title: "Field Agency",
      description: "On-ground visits for high-value cases",
      icon: MapPin, 
      capacity: 12,
      totalCapacity: 50,
      cost: 200,
      iconBg: "bg-blue-900/30",
      iconColor: "text-blue-400",
      progressColor: "bg-blue-500",
    },
  ];

  return (
    <div className=''>
        <h1 className='text-xl text-white mb-3'>Select Channel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {progressData.map((item, index) => (
          <ProgressCard 
            key={index}
            type="progress"
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default ChannelDashboard