"use client";
import React from "react";

export default function Header({ onMenuClick, title }) {
  return (
    <div className="w-full">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 bg-primary-light border-b border-gray-800 text-white shadow-md gap-3 sm:gap-0">
        
        {/* LEFT SECTION */}
        <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
          
          {/* Menu Button (always visible on mobile) */}
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md hover:bg-white/10 transition lg:hidden"
          >
            <i className="ri-menu-2-line text-2xl"></i>
          </button>

          {/* Title + Date */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <h1 className="heading">
              {title}
            </h1>
            <span className="text-xs sm:text-sm text-gray-400">
              Apr 20, 2026
            </span>
          </div>
        </div>

        {/* RIGHT SECTION (User Info) */}
        <div className="flex items-center justify-end w-full sm:w-auto">
          <div className="flex items-center gap-2 sm:gap-3 bg-[#0f172a] border border-white/10 px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto justify-between sm:justify-start">
            
            {/* Avatar */}
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm sm:text-base font-semibold">
              A
            </div>

            {/* User Info */}
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-md font-medium">
                Admin User
              </span>
              <span className="text-xs text-gray-400 hidden sm:block">
                Administrator
              </span>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}