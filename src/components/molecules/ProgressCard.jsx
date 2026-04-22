"use client";
import React from 'react';
import clsx from 'clsx';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ProgressCard = ({ 
  title, 
  value, 
  trend, 
  trendUp, 
  icon: Icon, 
  iconBg = "bg-blue-500/10", 
  iconColor = "text-blue-400",
  type = "progress", 
  children,
  description,
  capacity,
  totalCapacity,
  cost,
  progressColor = "bg-blue-500", 
  className
}) => {
  return (
    <div className={clsx(
      "bg-custom-dark rounded w-full",
      className
    )}>
      <div className="flex justify-between items-start mb-5">
        <div className="flex flex-col gap-1">
           {Icon && (
            <div className={clsx("p-4 rounded-xl w-fit mb-3", iconBg)}>
              <Icon size={24} className={iconColor} />
            </div>
          )}
          <h3 className="h1">{title}</h3>
          {description && (
            <p className="paragraph">
              {description}
            </p>
          )}
        </div>
      </div>
      {type === "progress" && (
        <div className="mt-4 space-y-5">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400 text-[14px]">Capacity</span>
              <span className="text-gray-200 text-[14px] font-bold">{capacity}/{totalCapacity}</span>
            </div>
            <div className="w-full bg-[#1e2235] h-2.5 rounded-full overflow-hidden">
              <div 
                className={clsx("h-full rounded-full transition-all duration-700 ease-out", progressColor)} 
                style={{ width: `${(capacity / totalCapacity) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-[#262b3f]">
            <span className="text-md text-gray-400 font-medium">Cost per Contact</span>
            <span className="text-white font-extrabold text-md">₹{cost}</span>
          </div>
        </div>
      )}
      {type === "stats" && (
        <div className="mt-2">
          <h2 className="text-3xl font-semibold text-white tracking-tight">{value}</h2>
          <div className={clsx(
            "flex items-center gap-1 mt-3 text-xs font-semibold",
            trendUp ? "text-green-500" : "text-red-500"
          )}>
            {trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span>{trend} vs yesterday</span>
          </div>
        </div>
      )}

      {type === "chart" && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default ProgressCard;