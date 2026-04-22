"use client";

import React from "react";
import { FileText } from "lucide-react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ReportBuilder = () => {
  return (
    <div className="bg-custom-dark  rounded mt-5">

      <h3 className="h1 mb-4">
        Custom Report Builder
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Report Type"
          type="select"
          placeholder="Select report type"
          options={[
            "Recovery Analysis",
            "Agent Performance",
            "Campaign Effectiveness",
            "Customer Segmentation",
            "Geographic Analysis",
          ]}
        />
        <Input
          label="Date Range"
          type="select"
          placeholder="Select date range"
          options={[
            "Last 7 Days",
            "Last 30 Days",
            "This Month",
            "Last Month",
            "Custom Range",
          ]}
        />
        <Input
          label="Group By"
          type="select"
          placeholder="Select grouping"
          options={[
            "Channel",
            "Agent",
            "City",
            "DPD Range",
            "Risk Score",
          ]}
        />
        <Input
          label="Output Format"
          type="select"
          placeholder="Select format"
          options={[
            "PDF",
            "Excel (XLSX)",
            "CSV",
            "JSON",
          ]}
        />

      </div>
      <div className="mt-6 flex justify-end">
        <Button icon={FileText} variant="secondary">
          Generate Custom Report
        </Button>
      </div>

    </div>
  );
};

export default ReportBuilder;