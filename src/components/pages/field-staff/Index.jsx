import React from "react";
import Stats from "./Stats";
import MapView from "./MapView";
import AgentsList from "./AgentsList";
import RecentVisits from "./RecentVisits";
import Heading from "@/components/atoms/Heading";


const MainField = () => {
  return (
    <div className="space-y-6">
      <Heading
        title="Field Staff Management"
        paragraph="Track field agents and verify on-ground activities"
        actions={[
          {
            text: "Assign Visit",
            icon: "MapPin",
            variant: "primary",
          },
        ]}
      />

      <Stats />

      <div className="grid grid-cols-1 gap-6">
        <MapView />
      </div>

      <RecentVisits />
    </div>
  );
};

export default MainField;
