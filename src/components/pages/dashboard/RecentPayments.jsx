import React from 'react';

const RecentPayments = () => {
  const payments = [
    { id: 1, name: "Rajesh Kumar", date: "2026-04-17 10:30", amount: "₹25,000", method: "UPI" },
    { id: 2, name: "Sneha Reddy", date: "2026-04-17 09:15", amount: "₹50,000", method: "NEFT" },
    { id: 3, name: "Amit Patel", date: "2026-04-16 16:45", amount: "₹15,000", method: "Cash" },
  ];

  return (
    <div className="bg-custom-dark rounded w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="h1">Recent Payments</h3>
        <button className="text-blue-500 text-sm font-medium hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-[#0f111a] border border-[#262b3f] rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 className="text-gray-100 font-medium text-sm">{payment.name}</h4>
              <p className="text-gray-500 text-[11px] mt-1 tracking-wider">{payment.date}</p>
            </div>
            <div className="text-right">
              <p className="text-[#10b981] font-bold text-sm">{payment.amount}</p>
              <p className="text-gray-500 text-[10px] mt-1 uppercase font-semibold">{payment.method}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPayments;