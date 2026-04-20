import Heading from "@/components/atoms/Heading";
import React from "react";
import { Filter } from "lucide-react";
import Input from "@/components/common/Input";
import MasterListTable from "./MasterListTable";

const MainMaster = () => {
  return (
    <div>
      <Heading
        title="Customer Master List"
        paragraph="Total: 6 customers"
        actions={[
          {
            text: "Upload Data",
            variant: "outline",
            icon: "Upload",
            route: "/upload",
          },
          {
            text: "Export",
            variant: "outline",
            icon: "Download",
            route: "/export",
          },
        ]}
      />
      <div className="bg-[#161b2e] border border-gray-700  rounded-2xl p-6 w-full">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="text-gray-400" size={20} />
          <h3 className="text-white text-lg font-semibold">Filters</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input
            label="City"
            type="select"
            placeholder="All Cities"
            options={["Delhi", "Mumbai", "Bangalore", "Hyderabad"]}
          />
          <Input label="DPD Min" type="number" placeholder="0" />
          <Input label="DPD Max" type="number" placeholder="120" />
          <Input label="Amount Min" type="number" placeholder="0" />
          <Input label="Amount Max" type="number" placeholder="1000000" />
          <Input label="Risk Score" type="text" placeholder="0-100" />
        </div>
      </div>
      <div className="mt-5">
        <Input
          placeholder="Search by name, ID,or phone..."
          icon="ri-search-line"
        />
      </div>
      <MasterListTable />
    </div>
  );
};

export default MainMaster;
