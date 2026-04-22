import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ 
  title, 
  value, 
  trend, 
  trendLabel = "vs yesterday", 
  isPositive = true, 
  Icon, 
  subText,      
  variant = "dark", 
  color = "blue"    
}) => {

  const solidStyles = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    green: "bg-green-600",
    orange: "bg-orange-600",
  };
  const iconStyles = {
    blue: "bg-blue-500/10 text-blue-400",
    purple: "bg-purple-500/10 text-purple-400",
    green: "bg-green-500/10 text-green-400",
    cyan: "bg-cyan-500/10 text-cyan-400",
    orange: "bg-orange-500/10 text-orange-400",
    teal: "bg-teal-500/10 text-teal-400"
  };

  const isSolid = variant === "solid";

  return (
    <div className={`
      ${isSolid ? solidStyles[color] : 'bg-custom-dark rounded'} 
     w-full
    `}>
      <div className="flex justify-between items-start mb-2">
        <span className={`${isSolid ? 'text-white/80' : 'text-gray-400'} text-sm font-medium`}>
          {title}
        </span>
        <div className={`p-2.5 rounded-xl transition-colors ${
          isSolid 
            ? 'bg-white/20 text-white' 
            : (iconStyles[color] || iconStyles.blue)
        }`}>
          {Icon && <Icon size={20} strokeWidth={2.5} />}
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-white text-3xl font-semibold tracking-tight">{value}</h2>
      
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-medium 
            ${isSolid ? 'text-white' : (isPositive ? 'text-green-500' : 'text-red-500')}
          `}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{trend} {trendLabel}</span>
          </div>
        )}
        {subText && (
          <div className={`text-sm mt-1 font-medium ${isSolid ? 'text-white/70' : 'text-gray-500'}`}>
            {subText}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;