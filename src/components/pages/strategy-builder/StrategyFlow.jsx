"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import { Plus, GitBranch, Clock, AlertCircle, Database, MessageSquare, Send, Mail, Phone, Users, MapPin, CheckCircle, XCircle } from "lucide-react";

const NODE_TYPES = {
  control: [
    { label: "Entry Condition", icon: GitBranch, border: "border-blue-500", bg: "bg-blue-500/10" },
    { label: "Wait Period", icon: Clock, border: "border-gray-500", bg: "bg-gray-500/10" },
    { label: "Decision Node", icon: AlertCircle, border: "border-yellow-500", bg: "bg-yellow-500/10" },
    { label: "Data Check", icon: Database, border: "border-indigo-500", bg: "bg-indigo-500/10" },
  ],
  action: [
    { label: "Send SMS", icon: MessageSquare, border: "border-green-500", bg: "bg-green-500/10" },
    { label: "Send WhatsApp", icon: Send, border: "border-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Send Email", icon: Mail, border: "border-cyan-500", bg: "bg-cyan-500/10" },
    { label: "AI Voice Call", icon: Phone, border: "border-purple-500", bg: "bg-purple-500/10" },
    { label: "Tele-calling", icon: Users, border: "border-orange-500", bg: "bg-orange-500/10" },
    { label: "Field Visit", icon: MapPin, border: "border-red-500", bg: "bg-red-500/10" },
  ],
  exit: [
    { label: "Success Exit", icon: CheckCircle, border: "border-green-600", bg: "bg-green-600/10" },
    { label: "End Journey", icon: XCircle, border: "border-gray-600", bg: "bg-gray-600/10" },
  ],
};

const StrategyFlow = () => {
  const [showNodeSelector, setShowNodeSelector] = useState(false);

  return (
    <div className="bg-custom-dark  border border-gray-800 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-4 md:p-6">
        <h2 className="h1">
          Strategy Flow
        </h2>

        <Button
          variant="secondary"
          icon={Plus}
          onClick={() => setShowNodeSelector(!showNodeSelector)}
        >
          {showNodeSelector ? "Back" : "Add Node"}
        </Button>
      </div>
      <div className="p-3 md:p-4 pt-0">
        {showNodeSelector ? (
          <div className="bg-[#0b0f1a] rounded-lg border border-gray-900 p-4 md:p-6 space-y-6">

            <h3 className="text-white text-lg font-semibold">
              Select Node Type:
            </h3>
            <div>
              <p className="text-gray-400 text-xs mb-3">CONTROL NODES</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NODE_TYPES.control.map((node, i) => (
                  <NodeCard key={i} {...node} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-3">ACTION NODES</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NODE_TYPES.action.map((node, i) => (
                  <NodeCard key={i} {...node} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-3">EXIT NODES</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NODE_TYPES.exit.map((node, i) => (
                  <NodeCard key={i} {...node} />
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="h-[300px] md:h-[450px] bg-[#0b0f1a] rounded-lg border border-gray-900 relative">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyFlow;
const NodeCard = ({ icon: Icon, label, border, bg }) => {
  return (
    <div
      className={`border ${border} ${bg} p-4 rounded-xl text-white flex items-center gap-3 cursor-pointer transition hover:scale-[1.02] hover:shadow-lg`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm md:text-base font-medium">{label}</span>
    </div>
  );
};