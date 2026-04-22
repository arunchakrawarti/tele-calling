import React from "react";

const mockAgents = [
  {
    id: "A001",
    name: "Sonia Mehta",
    type: "Tele-caller",
    status: "On Call",
    activeCustomers: 12,
    recoveryToday: 85000,
    callsToday: 24,
  },
  {
    id: "A002",
    name: "Rahul Verma",
    type: "Tele-caller",
    status: "Available",
    activeCustomers: 8,
    recoveryToday: 45000,
    callsToday: 18,
  },
  {
    id: "A003",
    name: "Deepak Kumar",
    type: "Field Agent",
    status: "On Field",
    activeCustomers: 5,
    recoveryToday: 125000,
    callsToday: 7,
  },
  {
    id: "A004",
    name: "AI Bot 1",
    type: "AI Bot",
    status: "Active",
    activeCustomers: 250,
    recoveryToday: 325000,
    callsToday: 456,
  },
];

const Performance = () => {
  return (
    <div className="bg-custom-dark  rounded-lg border border-gray-800 p-6">
      
      <h3 className="mb-4 h1">
        Agent Performance (Today)
      </h3>

      <div className="space-y-4">
        {mockAgents
          .filter((agent) => agent.type === "Tele-caller")
          .map((agent) => {

            const connected = Math.floor(agent.callsToday * 0.4);
            const ptp = Math.floor(agent.callsToday * 0.25);

            return (
              <div
                key={agent.id}
                className="p-4 border border-gray-700 rounded-lg"
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-white">
                      {agent.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {agent.callsToday} calls • ₹
                      {agent.recoveryToday.toLocaleString()} recovered
                    </p>
                  </div>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      agent.status === "On Call"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {agent.status}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-400">
                      {agent.callsToday}
                    </p>
                    <p className="text-xs text-gray-500">Calls</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-green-400">
                      {connected}
                    </p>
                    <p className="text-xs text-gray-500">Connected</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-purple-400">
                      {ptp}
                    </p>
                    <p className="text-xs text-gray-500">PTPs</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Performance;