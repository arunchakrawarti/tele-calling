import CampaignCard from '@/components/molecules/CampaignCard';
import React from 'react';

const Campaigns = () => {
  const campaignData = [
    {
      title: "High Priority DPD 90+",
      status: "Active",
      totalCustomers: 480,
      contacted: 380,
      coverage: 79,
      ptps: 120,
      recovery: "28.5L",
      strategy: "Multi-channel Follow-up",
      assignedGroups: ["Senior", "Mumbai"],
      botActive: true
    },
    {
      title: "PTP Follow-up Campaign",
      status: "Active",
      totalCustomers: 890,
      contacted: 650,
      coverage: 73,
      ptps: 312,
      recovery: "8.2L",
      strategy: "Aggressive Recovery",
      assignedGroups: ["Regional"],
      botActive: true
    },
    {
      title: "PTP Follow-up Campaign (Copy)",
      status: "Active",
      totalCustomers: 890,
      contacted: 650,
      coverage: 73,
      ptps: 312,
      recovery: "8.2L",
      strategy: "PTP Reminder Flow",
      assignedGroups: ["Regional"],
      botActive: true
    },
    {
      title: "Early DPD 0-30 Soft Touch",
      status: "Draft",
      totalCustomers: 2100,
      contacted: 0,
      coverage: 0,
      ptps: 0,
      recovery: "0",
      strategy: null,
      assignedGroups: [],
      botActive: false
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        {campaignData.map((campaign, index) => (
          <CampaignCard key={index} data={campaign} />
        ))}
        
      </div>
    </div>
  );
};

export default Campaigns;