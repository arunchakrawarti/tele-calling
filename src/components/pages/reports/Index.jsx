"use client"
import Heading from '@/components/atoms/Heading'
import React, { useState } from 'react'
import SummaryStats from './SummaryStats';
import PerformanceOverview from './PerformanceOverview';
import ReportTemplates from './ReportTemplates';
import RecentReports from './RecentReports';
import ReportBuilder from './ReportBuilder';

const Mainreport = () => {
    const [dateRange, setDateRange] = useState("Today");
  return (
    <div>
      <Heading
  title="Reports & Insights"
  paragraph="Generate and download comprehensive reports"
  selectOptions={[
    "Today",
    "This Week",
    "This Month",
    "Last Month",
    "Custom Range",
  ]}
  selectedValue={dateRange}
  onSelectChange={setDateRange}
  actions={[
    {
      text: "Export All",
      icon: "Download",
      variant: "primary",
    },
  ]}
/>
<SummaryStats/>
<PerformanceOverview/>
<ReportTemplates/>
<RecentReports/>
<ReportBuilder/>
    </div>
  )
}

export default Mainreport
