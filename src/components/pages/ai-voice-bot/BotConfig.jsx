import Input from "@/components/common/Input";
import React from "react";

const BotConfig = () => {
  return (
    <div className="bg-custom-dark rounded mt-5">
      <h3 className="h1 mb-4">Bot Configuration</h3>

      <div className="grid grid-cols-3 gap-6">

        <Input
          label="Language"
          type="select"
          options={["English", "Hindi", "Tamil"]}
        />

        <Input
          label="Script Template"
          type="select"
          options={[
            "Friendly Reminder",
            "Urgent Follow-up"
          ]}
        />

        <Input
          label="Retry Logic"
          type="select"
          options={[
            "2 attempts/day",
            "3 attempts/day"
          ]}
        />

      </div>
    </div>
  );
};

export default BotConfig;