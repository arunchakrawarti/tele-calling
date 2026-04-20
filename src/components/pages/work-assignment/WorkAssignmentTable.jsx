"use client";
import React from 'react';
import BasicTable from '../../common/BasicTable'; 

const WorkAssignmentTable = () => {
  return (
    <div className="mt-5">
       <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg font-semibold">Select Customers</h2>
          <div className="flex gap-4 text-sm">
            <button className="text-blue-500 hover:underline">Select All</button>
            <button className="text-gray-400 hover:underline">Clear</button>
          </div>
       </div>

       <BasicTable 
          columns={workAssignmentColumns}
          data={data}
          pagination={true}
          total={data.length}
          pageSize={10}
       />
    </div>
  );
};

export default WorkAssignmentTable;
  const data = [
    { id: "C001", name: "Rajesh Kumar", dpd: 45, amount: "1,25,000", risk: 85, status: "AI Bot Active" },
    { id: "C002", name: "Priya Sharma", dpd: 90, amount: "2,50,000", risk: 92, status: "Field Visit Scheduled" },
    { id: "C003", name: "Amit Patel", dpd: 30, amount: "75,000", risk: 65, status: "Tele-calling" },
    { id: "C004", name: "Sneha Reddy", dpd: 15, amount: "50,000", risk: 45, status: "PTP Given" },
    { id: "C005", name: "Vikram Singh", dpd: 120, amount: "3,50,000", risk: 95, status: "Legal Action" },
    { id: "C006", name: "Kavita Joshi", dpd: 60, amount: "1,80,000", risk: 78, status: "Tele-calling" },
  ];

  const workAssignmentColumns = [
    {
      label: "Customer",
      key: "name",
      render: (val, row) => (
        <div className="flex flex-col">
          <span className="text-gray-100 font-medium">{val}</span>
          <span className="text-gray-500 text-[11px]">{row.id}</span>
        </div>
      ),
    },
    {
      label: "DPD",
      key: "dpd",
      render: (val) => {
        const colors = val >= 90 ? "border-red-900/50 text-red-400 bg-red-950/30" : 
                       val >= 45 ? "border-orange-900/50 text-orange-400 bg-orange-950/30" : 
                       "border-yellow-900/50 text-yellow-400 bg-yellow-950/30";
        return (
          <div className={`w-fit px-3 py-0.5 rounded-full border text-[11px] ${colors}`}>
            {val} days
          </div>
        );
      },
    },
    {
      label: "Amount",
      key: "amount",
      render: (val) => <span className="text-gray-200">₹{val}</span>,
    },
    {
      label: "Risk Score",
      key: "risk",
      render: (val) => (
        <div className="flex items-center gap-3">
          <div className="w-20 bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${val > 80 ? "bg-red-500" : val > 60 ? "bg-orange-500" : "bg-green-500"}`}
              style={{ width: `${val}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">{val}</span>
        </div>
      ),
    },
    {
      label: "Current Status",
      key: "status",
      render: (val) => (
        <span className="bg-[#1e2235]/50 text-gray-400 px-3 py-1 rounded-full text-[11px] border border-gray-700">
          {val}
        </span>
      ),
    }
  ];