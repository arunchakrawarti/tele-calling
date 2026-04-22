import StatsCard from "@/components/molecules/StatsCard";
import { FileText, TrendingUp, Calendar, Filter } from "lucide-react";
import React from "react";

const SummaryStats = () => {
  const summaryData = [
    {
      title: "Total Reports",
      value: "148",
      subText: "Generated this month",
      Icon: FileText,
      color: "blue"
    },
    {
      title: "Recovery (MTD)",
      value: "₹85L",
      trend: "+18%",
      trendLabel: "vs last month",
      isPositive: true,
      Icon: TrendingUp,
      color: "green"
    },
    {
      title: "Calls Made",
      value: "5,388",
      subText: "This month",
      Icon: Calendar,
      color: "purple"
    },
    {
      title: "PTPs Given",
      value: "691",
      subText: "This month",
      Icon: Filter,
      color: "orange"
    }
  ];
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((data, index) => (
        <StatsCard 
          key={index}
          title={data.title}
          value={data.value}
          trend={data.trend}
          trendLabel={data.trendLabel}
          isPositive={data.isPositive}
          subText={data.subText}
          Icon={data.Icon}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default SummaryStats;