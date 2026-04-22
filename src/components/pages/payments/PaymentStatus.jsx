import React from "react";

const paymentMethodsData = [
  { method: "UPI", count: 6, amount: 285000, color: "bg-purple-500" },
  { method: "NEFT/RTGS", count: 4, amount: 220000, color: "bg-blue-500" },
  { method: "Cash", count: 2, amount: 75000, color: "bg-green-500" },
];

const ptpStatusData = [
  { status: "Active (Due Later)", count: 68, color: "bg-blue-500" },
  { status: "Due Today", count: 5, color: "bg-orange-500" },
  { status: "Overdue", count: 12, color: "bg-red-500" },
];

const PaymentStatus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        
      <div className="bg-custom-dark  border border-white/10 rounded-xl p-6">
        <h3 className="h1 mb-4">Payment Methods (Today)</h3>

        <div className="space-y-3">
          {paymentMethodsData.map((item) => (
            <div key={item.method} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 ${item.color} rounded-full`} />
                <span className="text-white">{item.method}</span>
              </div>

              <div className="text-right">
                <p className="text-white">
                  ₹{(item.amount / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-gray-400">
                  {item.count} transactions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-custom-dark  border border-white/10 rounded-xl p-6">
        <h3 className="mb-4 h1">PTP Status Distribution</h3>

        <div className="space-y-3">
          {ptpStatusData.map((item) => (
            <div key={item.status}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-white">{item.status}</span>
                <span className="text-sm text-gray-400">{item.count}</span>
              </div>

              <div className="w-full bg-[#1a1f36] rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${(item.count / 85) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PaymentStatus;