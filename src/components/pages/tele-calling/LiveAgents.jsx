import React from "react";
import { Phone, Volume2, Mic, PhoneOff } from "lucide-react";
import Button from "@/components/common/Button";

const liveAgents = [
  {
    id: "A001",
    name: "Sonia Mehta",
    status: "On Call",
    customer: "Rajesh Kumar",
    duration: "05:32",
    sentiment: "Positive",
  },
  {
    id: "A002",
    name: "Rahul Verma",
    status: "Available",
    customer: null,
    duration: null,
    sentiment: null,
  },
  {
    id: "A005",
    name: "Priya Singh",
    status: "On Call",
    customer: "Amit Patel",
    duration: "02:15",
    sentiment: "Neutral",
  },
  {
    id: "A006",
    name: "Arjun Reddy",
    status: "Break",
    customer: null,
    duration: null,
    sentiment: null,
  },
];

const LiveAgents = () => {
  return (
    <div className="bg-custom-dark rounded">
      <h3 className="h1 mb-4">Live Agent Monitor</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
        {liveAgents.map((agent) => {
          const isOnCall = agent.status === "On Call";
          const isAvailable = agent.status === "Available";

          return (
            <div
              key={agent.id}
              className={`p-4 rounded-xl border ${
                isOnCall
                  ? "border-green-500/30 bg-green-500/5"
                  : isAvailable
                    ? "border-blue-500/30 bg-blue-500/5"
                    : "border-gray-700 bg-gray-800/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-responsive">
                      {agent.name}
                    </h4>

                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        isOnCall
                          ? "bg-green-500/20 text-green-400"
                          : isAvailable
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400">{agent.id}</p>
                </div>

                {isOnCall && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <Phone size={14} />
                    <span className="font-mono">{agent.duration}</span>
                  </div>
                )}
              </div>
              {agent.customer && (
                <div className="mb-3">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Talking to:{" "}
                    <span className="font-medium text-gray-200">
                      {agent.customer}
                    </span>
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-400">
                      Sentiment:
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        agent.sentiment === "Positive"
                          ? "bg-green-500/20 text-green-400"
                          : agent.sentiment === "Neutral"
                            ? "bg-gray-700 text-gray-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {agent.sentiment}
                    </span>
                  </div>
                </div>
              )}

              {isOnCall && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2">
                  <Button icon={Volume2} variant="secondary">
                    Listen
                  </Button>

                  <Button
                    icon={Mic}
                    variant="primary"
                  >
                    Whisper
                  </Button>

                  <Button icon={PhoneOff} variant="success">
                    Barge
                  </Button>
                </div>
              )}
              {isAvailable && (
                <div className="text-center py-2 text-xs sm:text-sm text-gray-500">
                  Ready for next call
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveAgents;
