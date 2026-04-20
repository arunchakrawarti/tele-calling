import React from 'react';
import { CheckCircle2, AlertCircle, Phone, Clock } from 'lucide-react';

const CallDisposition = () => {
  return (
    <div className="bg-[#161b2e] border border-gray-700 rounded-2xl p-6 w-full">
      <h3 className="text-white text-lg font-semibold">Call Disposition</h3>
      <p className="text-gray-400 text-sm mb-8">Today's outcomes</p>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <DispositionCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default CallDisposition;
const DispositionCard = ({ icon: Icon, count, label, percentage, colorClass, iconColor }) => (
  <div className="bg-[#0f111a] border border-[#262b3f] rounded-xl p-4 flex flex-col justify-between min-w-[120px]">
    <Icon className={iconColor} size={20} />
    <div className="mt-4">
      <h4 className="text-white text-2xl font-bold">{count}</h4>
      <p className="text-gray-500 text-[11px] font-medium uppercase tracking-tight mt-1">{label}</p>
      <p className={`text-[12px] font-bold mt-1 ${colorClass}`}>{percentage}</p>
    </div>
  </div>
);

const stats = [
    { icon: CheckCircle2, count: 89, label: "Interested", percentage: "30.0%", colorClass: "text-green-500", iconColor: "text-green-500" },
    { icon: AlertCircle, count: 45, label: "Not Interested", percentage: "15.2%", colorClass: "text-red-500", iconColor: "text-red-400" },
    { icon: Phone, count: 67, label: "Callback", percentage: "22.6%", colorClass: "text-blue-500", iconColor: "text-blue-400" },
    { icon: Clock, count: 46, label: "No Answer", percentage: "15.5%", colorClass: "text-gray-400", iconColor: "text-gray-400" },
  ];