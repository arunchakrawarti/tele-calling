import RecoveryTeamCard from '@/components/molecules/RecoveryTeamCard';
import React from 'react'

const UserGroup = () => {
    const teamData = [
  {
    title: "Senior Collection Team",
    type: "Tele-calling",
    members: 12,
    status: "Active",
    stats: [
      { label: "Calls", value: 1245 },
      { label: "Recovery", value: "₹185.0K" },
      { label: "PTPs", value: 342 },
    ],
    campaigns: [
      { name: "DPD 30-60 Recovery", status: "Active" },
      { name: "High Priority DPD 90+", status: "Active" },
    ],
  },
  {
    title: "Regional Hindi Team",
    type: "Tele-calling",
    members: 8,
    status: "Active",
    stats: [
      { label: "Calls", value: 890 },
      { label: "Recovery", value: "₹125.0K" },
      { label: "PTPs", value: 215 },
    ],
    campaigns: [
      { name: "DPD 30-60 Recovery", status: "Active" },
      { name: "PTP Follow-up Campaign", status: "Active" },
    ],
  },
  {
    title: "Mumbai Field Team",
    type: "Field Agent",
    members: 5,
    status: "Active",
    stats: [
      { label: "Visits", value: 125 },
      { label: "Recovery", value: "₹285.0K" },
      { label: "PTPs", value: 98 },
    ],
    campaigns: [
      { name: "High Priority DPD 90+", status: "Active" },
    ],
  },
  {
    title: "Delhi Field Team",
    type: "Field Agent",
    members: 6,
    status: "Inactive",
    stats: [
      { label: "Visits", value: 0 },
      { label: "Recovery", value: "₹0.0K" },
      { label: "PTPs", value: 0 },
    ],
    campaigns: [],
  },
];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {teamData.map((team, index) => (
    <RecoveryTeamCard key={index} {...team} />
  ))}
</div>
  )
}

export default UserGroup
