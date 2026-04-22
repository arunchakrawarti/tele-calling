import React from "react";

const callQueue = [
  { id: "C007", name: "Vikram Singh", priority: "High", dpd: 120, amount: 350000 },
  { id: "C008", name: "Meera Jain", priority: "Medium", dpd: 75, amount: 180000 },
  { id: "C009", name: "Suresh Nair", priority: "High", dpd: 95, amount: 220000 },
];

const CallQueue = () => {
  return (
    <div className="bg-custom-dark  rounded">
      
      <h3 className="h1 mb-4">
        Call Queue
      </h3>

      <div className="space-y-3">
        {callQueue.map((customer, index) => {
          const isHigh = customer.priority === "High";

          return (
            <div
              key={customer.id}
              className="p-4 border border-gray-700 rounded-lg hover:border-gray-600"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-gray-500">
                      #{index + 1}
                    </span>

                    <h4 className="text-responsive">
                      {customer.name}
                    </h4>

                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        isHigh
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {customer.priority}
                    </span>
                  </div>

                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>DPD: {customer.dpd} days</span>
                    <span>₹{customer.amount.toLocaleString()}</span>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  Assign
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CallQueue;