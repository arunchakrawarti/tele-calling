import React from 'react';
import { CheckCircle2, AlertTriangle, Clock, AlertCircle } from 'lucide-react';

const RealTimeAlerts = () => {
  const alerts = [
    {
      id: 1,
      message: "Rajesh Kumar made payment of ₹25,000",
      time: "10 mins ago",
      type: "success",
      icon: CheckCircle2,
      bgColor: "bg-[#061e1d]",
      borderColor: "border-[#10b981]/30",
      iconColor: "text-[#10b981]"
    },
    {
      id: 2,
      message: "Angry customer detected - Vikram Singh (Call ID: 4521)",
      time: "25 mins ago",
      type: "danger",
      icon: AlertTriangle,
      bgColor: "bg-[#1f121b]",
      borderColor: "border-[#ef4444]/30",
      iconColor: "text-[#ef4444]"
    },
    {
      id: 3,
      message: "5 PTPs expiring today - Action needed",
      time: "1 hour ago",
      type: "warning",
      icon: Clock,
      bgColor: "bg-[#1f1b13]",
      borderColor: "border-[#f59e0b]/30",
      iconColor: "text-[#f59e0b]"
    }
  ];

  return (
    <div className="bg-[#161b2e] border border-gray-700  rounded-2xl p-6 w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-lg font-semibold">Real-time Alerts</h3>
        <AlertCircle className="text-orange-500" size={20} />
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`${alert.bgColor} border ${alert.borderColor} rounded-xl p-4 flex gap-4 items-start transition-hover duration-300 hover:brightness-110`}
          >
            <alert.icon className={`${alert.iconColor} mt-1 flex-shrink-0`} size={20} />
            <div>
              <p className="text-gray-100 text-sm font-medium leading-tight">{alert.message}</p>
              <p className="text-gray-500 text-xs mt-2">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeAlerts;