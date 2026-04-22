import React from 'react';
import { UserPlus, TrendingUp, PhoneCall, AlertCircle } from 'lucide-react';

const QuickActions = () => {
    
  return (
    <div className="bg-custom-dark border border-gray-700  rounded-2xl p-6 w-full mt-5">
      <h3 className="h1 mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <QuickActionCard key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
const QuickActionCard = ({ icon: Icon, label, bgColor, borderColor, iconColor }) => (
  <button className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border ${borderColor} ${bgColor} transition-all duration-300 hover:scale-[1.02] hover:brightness-125 w-full`}>
    <Icon className={iconColor} size={28} />
    <span className="text-white text-sm font-medium">{label}</span>
  </button>
);
 const actions = [
    {
      label: "Upload Data",
      icon: UserPlus,
      bgColor: "bg-[#1a2138]",
      borderColor: "border-[#3b82f6]/30",
      iconColor: "text-[#3b82f6]"
    },
    {
      label: "Create Strategy",
      icon: TrendingUp,
      bgColor: "bg-[#251b3a]",
      borderColor: "border-[#a855f7]/30",
      iconColor: "text-[#a855f7]"
    },
    {
      label: "Assign Work",
      icon: PhoneCall,
      bgColor: "bg-[#0d231f]",
      borderColor: "border-[#10b981]/30",
      iconColor: "text-[#10b981]"
    },
    {
      label: "View Analytics",
      icon: AlertCircle,
      bgColor: "bg-[#2a1d17]",
      borderColor: "border-[#f97316]/30",
      iconColor: "text-[#f97316]"
    }
  ];