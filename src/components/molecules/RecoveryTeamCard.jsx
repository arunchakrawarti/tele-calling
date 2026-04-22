"use client";
import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Badge from "../atoms/Badge";

const RecoveryTeamCard = ({
  title,
  status = "Active",
  type,
  members,
  stats = [],
  campaigns = [],
}) => {
  return (
    <div className="bg-custom-dark rounded space-y-5">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="h1">{title}</h2>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <Badge text={type} customStyle="capitalize" />
            <span className="text-gray-400">{members} members</span>
            <Badge text={status} customStyle="capitalize" />

          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <Pencil size={16} className="cursor-pointer hover:text-white" />
          <Trash2 size={16} className="cursor-pointer hover:text-red-500" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <div key={i} className="bg-black/40  rounded-lg border border-gray-700 p-4">
            <p className="text-gray-400 text-sm">{item.label}</p>
            <h3 className="text-white text-lg font-semibold">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
      <div className="bg-black/40 rounded-lg border border-gray-700 p-4 space-y-3">
        <p className="text-responsive">
          Assigned to Campaigns:
        </p>

        {campaigns.length > 0 ? (
          campaigns.map((c, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">{c.name}</span>
              <Badge text={c.status} customStyle="capitalize" />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            No campaigns assigned
          </p>
        )}

        <button className="text-blue-500 text-sm hover:underline">
          + Assign to Campaign
        </button>
      </div>
    </div>
  );
};

export default RecoveryTeamCard;