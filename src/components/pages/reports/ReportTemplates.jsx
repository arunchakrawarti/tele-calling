import Button from "@/components/common/Button";
import { Download, FileText } from "lucide-react";
import React from "react";

const reportTemplates = [
  {
    id: 1,
    name: "Daily Recovery Report",
    description: "Daily breakdown of recovery by channel and agent",
    frequency: "Daily",
    lastGenerated: "2026-04-17 08:00",
  },
  {
    id: 2,
    name: "Weekly Performance Summary",
    description: "Comprehensive weekly performance metrics",
    frequency: "Weekly",
    lastGenerated: "2026-04-14 09:00",
  },
  {
    id: 3,
    name: "Monthly Collection Report",
    description: "Month-end collection summary with forecasts",
    frequency: "Monthly",
    lastGenerated: "2026-04-01 10:00",
  },
  {
    id: 4,
    name: "Campaign Effectiveness Report",
    description: "Analysis of active campaigns and strategies",
    frequency: "On-Demand",
    lastGenerated: "2026-04-15 14:30",
  },
  {
    id: 5,
    name: "Agent Performance Report",
    description: "Individual agent metrics and benchmarking",
    frequency: "Weekly",
    lastGenerated: "2026-04-14 09:00",
  },
  {
    id: 6,
    name: "Geographic Analysis Report",
    description: "City-wise recovery and customer distribution",
    frequency: "Monthly",
    lastGenerated: "2026-04-01 10:00",
  },
];

const ReportTemplates = () => {
  return (
    <div className="bg-custom-dark  rounded-xl border border-gray-800 p-6 mt-5">

      <h3 className="h1 mb-4">
        Report Templates
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {reportTemplates.map((report) => (
          <div
            key={report.id}
            className="p-4 bg-[#0f1424] border border-gray-800 rounded-xl hover:border-blue-500 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">

              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>

              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300">
                {report.frequency}
              </span>

            </div>
            <h4 className="font-semibold text-white mb-1">
              {report.name}
            </h4>

           
            <p className="text-sm text-gray-400 mb-3">
              {report.description}
            </p>

           
            <div className="text-xs text-gray-500 mb-3">
              Last: {report.lastGenerated}
            </div>

           
            <div className="flex gap-2">

              <Button variant="secondary" className="flex-1">
                Generate
              </Button>

              <Button icon={Download} variant="default">
              </Button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ReportTemplates;