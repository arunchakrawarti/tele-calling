import React from "react";
import { Users, Phone, Clock, PhoneCall } from 'lucide-react';
import StatsCard from "@/components/molecules/StatsCard";

const StatsSection = () => {
  const agentStats = [
    {
      title: "Total Agents",
      value: "8",
      subText: "2 on calls now", 
      Icon: Users,
      color: "blue"
    },
    {
      title: "Calls Today",
      value: "42",
      trend: "+18%",
      trendLabel: "vs yesterday",
      isPositive: true,
      Icon: Phone,
      color: "green"
    },
    {
      title: "Avg Call Duration",
      value: "6:45",
      subText: "Minutes", 
      Icon: Clock,
      color: "purple"
    },
    {
      title: "Recovery Today",
      value: "₹1.3L",
      subText: "12 PTPs given", 
      Icon: PhoneCall,
      color: "orange" 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {agentStats.map((stat, index) => (
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
  );
};

export default StatsSection;