"use client";
import React from "react";
import { MapPin, Navigation } from "lucide-react";

const MapView = () => {
  const fieldAgents = [
    {
      id: "F001",
      name: "Deepak Kumar",
      status: "On Field",
      location: { lat: 19.076, lng: 72.8777, city: "Mumbai" },
      visits: [
        {
          customer: "Priya Sharma",
          address: "Andheri West, Mumbai",
          status: "In Progress",
          time: "11:30 AM",
        },
        {
          customer: "Vikram Singh",
          address: "Bandra East, Mumbai",
          status: "Scheduled",
          time: "2:00 PM",
        },
      ],
      todayCompleted: 2,
      todayRecovery: 125000,
    },
    {
      id: "F002",
      name: "Arjun Nair",
      status: "Available",
      location: { lat: 19.115, lng: 72.905, city: "Mumbai" },
      visits: [
        {
          customer: "Kavita Joshi",
          address: "Powai, Mumbai",
          status: "Scheduled",
          time: "1:00 PM",
        },
      ],
      todayCompleted: 3,
      todayRecovery: 85000,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
      <div className="bg-custom-dark rounded-lg border border-gray-800 p-6">
        <h3 className="mb-4 h1">
          Live Agent Tracking
        </h3>

        <div className="relative bg-gray-900/50 rounded-lg h-96 overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-green-900/30">

            {/* Agent 1 */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-custom-dark border border-gray-700 px-2 py-1 rounded shadow text-xs text-gray-200 whitespace-nowrap">
                Deepak Kumar
              </div>
            </div>

            {/* Agent 2 */}
            <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-custom-dark border border-gray-700 px-2 py-1 rounded shadow text-xs text-gray-200 whitespace-nowrap">
                Arjun Nair
              </div>
            </div>

            {/* Customers */}
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-custom-dark border border-gray-700 p-2 rounded-lg shadow text-xs text-gray-300">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Active Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Customer Location</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-dark rounded-lg border border-gray-800 p-6">
        <h3 className="h1 mb-4">
          Field Agents
        </h3>

        <div className="space-y-4">
          {fieldAgents?.map((agent) => (
            <div
              key={agent.id}
              className="p-4 border border-gray-700 rounded-lg bg-gray-900/30"
            >
              
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-100">
                      {agent.name}
                    </h4>

                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${
                        agent.status === "On Field"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {agent.location.city}
                  </p>
                </div>

                <button className="p-2 hover:bg-gray-800 rounded-lg">
                  <Navigation className="w-5 h-5 text-blue-400" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                
                <div className="text-center p-2 bg-blue-500/10 border border-blue-500/20 rounded">
                  <p className="text-xl font-bold text-blue-400">
                    {agent.todayCompleted}
                  </p>
                  <p className="text-xs text-gray-400">Completed</p>
                </div>

                <div className="text-center p-2 bg-green-500/10 border border-green-500/20 rounded">
                  <p className="text-xl font-bold text-green-400">
                    ₹{(agent.todayRecovery / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-gray-400">Recovered</p>
                </div>
              </div>

              {/* Visits */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">
                  Today's Schedule:
                </p>

                {agent.visits?.map((visit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between text-sm p-2 bg-gray-800/50 rounded"
                  >
                    <div>
                      <p className="font-medium text-gray-200">
                        {visit.customer}
                      </p>
                      <p className="text-xs text-gray-400">
                        {visit.address}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-400">
                        {visit.time}
                      </p>

                      <span
                        className={`inline-flex px-2 py-0.5 rounded text-xs font-medium mt-1 ${
                          visit.status === "In Progress"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {visit.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MapView;