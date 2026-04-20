"use client"
import Heading from "@/components/atoms/Heading";
import React from "react";
import ChannelDashboard from "./ChannelDashboard";
import WorkAssignmentTable from "./WorkAssignmentTable";

const MainAssignment = () => {
  return (
    <div>
      <Heading title="Work Assignment" paragraph="Assign customers to different channels based on strategy" />
      <ChannelDashboard/>
      <WorkAssignmentTable/>
    </div>
  );
};

export default MainAssignment;
