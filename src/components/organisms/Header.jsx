"use client";
import React from "react";

export default function Header({ onMenuClick,title }) {
  return (
    <div className="w-full">
      <header className="h-18 flex items-center justify-between px-6 bg-[#0f1419] border-b border-gray-800 text-white shadow-md">
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick}>
            <i className="ri-menu-2-line text-2xl"></i>
          </button>

          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">{title}</h1>
            <span className="text-sm text-gray-400">Apr 20, 2026</span>
          </div>
        </div>
        <div className="flex items-center gap-4 border border-gray-800 rounded-lg">
          <div className="flex items-center gap-3 bg-[#0f172a] border border-white/10 px-4 py-2 rounded-xl shadow-sm">
            <div className="h-10 w-10 flex items-center justify-center 
            rounded-full bg-blue-600 text-white font-semibold">
              A
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-md font-medium">Admin User</span>
              <span className="text-xs text-gray-400">
                Administrator
              </span>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}