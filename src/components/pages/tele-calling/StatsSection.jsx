import React from "react";
import { Users, Phone } from "lucide-react";
import StatsCard from "@/components/molecules/StatsCard";

const StatsSection = () => {
  const stats = [
    { title: "Total Agents", value: "8", trend: "2 on calls", isPositive: true, Icon: Users },
    { title: "Calls Today", value: "42", trend: "+18%", isPositive: true, Icon: Phone },
    { title: "Avg Call Duration", value: "6:45", trend: "Minutes", isPositive: false, Icon: Phone },
    { title: "Recovery Today", value: "₹1.3L", trend: "12 PTPs", isPositive: true, Icon: Phone },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <StatsCard key={i} {...item} />
      ))}
    </div>
  );
};

export default StatsSection;