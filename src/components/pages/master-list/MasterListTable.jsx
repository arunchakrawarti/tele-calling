"use client";
import React from 'react';
import { Eye } from 'lucide-react';
import BasicTable from '@/components/common/BasicTable';

const MasterListTable = () => {


  const actions = [
    ({ row }) => (
      <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs">
        <Eye size={14} /> View
      </button>
    )
  ];

  return (
    <div className="mt-5">
      <BasicTable 
        columns={columns} 
        data={data} 
        actions={actions} 
        pagination={true}
        total={6}
        pageSize={5}
      />
    </div>
  );
};

export default MasterListTable;
  const columns = [
    { label: "Customer ID", key: "id" },
    { label: "Name", key: "name" },
    { 
      label: "Phone", 
      key: "phone",
      render: (val) => <span className="text-gray-400 leading-tight block">{val}</span>
    },
    { label: "City", key: "city" },
    { 
      label: "DPD", 
      key: "dpd",
      render: (val) => {
        const colors = {
          "45 days": "bg-yellow-500/10 text-yellow-500 border-yellow-500/50",
          "90 days": "bg-red-500/10 text-red-500 border-red-500/50",
          "15 days": "bg-green-500/10 text-green-500 border-green-500/50",
          "120 days": "bg-red-700/10 text-red-600 border-red-600/50"
        };
        return (
          <span className={`px-3 py-1 rounded-full border text-xs font-bold ${colors[val] || "bg-gray-500/10"}`}>
            {val}
          </span>
        );
      }
    },
    { label: "Amount", key: "amount", render: (val) => `₹${val.toLocaleString()}` },
    { 
      label: "Risk Score", 
      key: "risk",
      render: (val) => (
        <div className="flex items-center gap-2">
          <div className={`h-1.5 w-4 rounded-full ${val > 80 ? 'bg-red-500' : val > 50 ? 'bg-orange-500' : 'bg-green-500'}`} />
          <span className="text-gray-400">{val}</span>
        </div>
      )
    },
    { 
      label: "Status", 
      key: "status",
      render: (val) => (
        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-semibold">
          {val}
        </span>
      )
    },
    {
        label: "Tags",
        key: "tags",
        render: (tags) => (
            <div className="flex flex-col gap-1">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] w-fit">
                        {tag}
                    </span>
                ))}
            </div>
        )
    }
  ];

  const data = [
    { id: "C001", name: "Rajesh Kumar", phone: "+91 98765 43210", city: "Mumbai", dpd: "45 days", amount: 125000, risk: 85, status: "AI Bot Active", tags: ["High Risk", "Responsive"] },
    { id: "C002", name: "Priya Sharma", phone: "+91 87654 32109", city: "Delhi", dpd: "90 days", amount: 250000, risk: 92, status: "Field Visit Scheduled", tags: ["High Risk", "Legal Notice"] },
    { id: "C003", name: "Amit Patel", phone: "+91 76543 21098", city: "Bangalore", dpd: "30 days", amount: 75000, risk: 65, status: "Tele-calling", tags: ["Medium Risk"] },
    { id: "C004", name: "Sneha Reddy", phone: "+91 65432 10987", city: "Hyderabad", dpd: "15 days", amount: 50000, risk: 45, status: "PTP Given", tags: ["Low Risk", "Cooperative"] },
  ];