import { MapPin, CheckCircle, Clock, User } from "lucide-react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      
      {[
        { title: "Total Agents", value: "5", sub: "2 on field", icon: User, color: "blue" },
        { title: "Visits Today", value: "7", sub: "5 completed", icon: MapPin, color: "green" },
        { title: "Recovery", value: "₹2.1L", sub: "From visits", icon: CheckCircle, color: "purple" },
        { title: "Avg Time", value: "45", sub: "Minutes", icon: Clock, color: "orange" },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="bg-custom-dark border border-gray-800 p-5 rounded-xl">
            <div className="flex justify-between mb-2">
              <p className="text-gray-400 text-sm">{item.title}</p>
              <Icon className={`w-5 h-5 text-${item.color}-400`} />
            </div>
            <p className="text-2xl font-bold text-white">{item.value}</p>
            <p className="text-xs text-gray-500">{item.sub}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;