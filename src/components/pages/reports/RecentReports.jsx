import Button from "@/components/common/Button";
import { Download, FileText } from "lucide-react";
import React from "react";

const recentReports = [
  {
    name: "Daily Recovery Report - April 17, 2026",
    size: "2.4 MB",
    format: "PDF",
    generated: "8:00 AM",
  },
  {
    name: "Daily Recovery Report - April 16, 2026",
    size: "2.3 MB",
    format: "PDF",
    generated: "8:00 AM",
  },
  {
    name: "Weekly Performance Summary - Week 3",
    size: "5.8 MB",
    format: "Excel",
    generated: "April 14, 9:00 AM",
  },
  {
    name: "Campaign Effectiveness Report",
    size: "3.2 MB",
    format: "PDF",
    generated: "April 15, 2:30 PM",
  },
];

const RecentReports = () => {
  return (
    <div className="bg-custom-dark  rounded mt-5">

      <h3 className="h1 mb-4">
        Recent Reports
      </h3>

      <div className="space-y-3">

        {recentReports.map((report, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-[#0f1424] border border-gray-800 rounded-xl hover:border-blue-500 transition-all"
          >

            {/* Left */}
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-400" />
              </div>

              <div>
                <h4 className="text-responsive">
                  {report.name}
                </h4>

                <p className="text-sm text-gray-400 mt-1">
                  {report.format} • {report.size} • Generated {report.generated}
                </p>
              </div>

            </div>
            <div>
              <Button icon={Download} variant="default"/>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecentReports;