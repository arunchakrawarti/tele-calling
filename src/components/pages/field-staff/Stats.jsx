import StatsCard from '@/components/molecules/StatsCard';
import { Users, MapPin, CheckCircle, Clock } from 'lucide-react';

const Stats = () => {
  const visitStats = [
    {
      title: "Total Agents",
      value: "5",
      subText: "2 on field now",
      Icon: Users,
      color: "blue"
    },
    {
      title: "Visits Today",
      value: "7",
      subText: "5 completed", 
      Icon: MapPin,
      color: "green"
    },
    {
      title: "Recovery Today",
      value: "₹2.1L",
      subText: "From field visits",
      Icon: CheckCircle,
      color: "purple"
    },
    {
      title: "Avg Visit Time",
      value: "45",
      subText: "Minutes",
      Icon: Clock,
      color: "orange"
    }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visitStats.map((stat, index) => (
          <StatsCard 
            key={index}
            {...stat} 
          />
        ))}
      </div>
  );
};

export default Stats;