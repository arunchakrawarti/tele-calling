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
    <div className="bg-custom-dark  rounded-xl border border-gray-800 p-6 mt-5">

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
                <h4 className="font-medium text-white">
                  {report.name}
                </h4>

                <p className="text-sm text-gray-400">
                  {report.format} • {report.size} • Generated {report.generated}
                </p>
              </div>

            </div>

            {/* Right */}
            <div>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
                <Download className="w-5 h-5 text-gray-300" />
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecentReports;