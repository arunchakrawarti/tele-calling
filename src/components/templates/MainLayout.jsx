"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/organisms/Sidebar";
import Header from "@/components/organisms/Header";

const MainLayout = ({
  children,
  title,
  searchContent,
  showSearch = true,
  searchLayout = "left",
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <div className="h-screen w-full flex bg-gray-100 overflow-hidden">
      <div className="h-full overflow-y-auto no-scrollbar">
        <Sidebar
          isOpen={drawerOpen}
          isMobile
          onClose={() => setDrawerOpen(false)}
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col h-full lg:ml-[80px]">
        <Header
          title={title}
          onMenuClick={() => setDrawerOpen(true)}
          showSearch={showSearch}
          searchLayout={searchLayout}
        >
          {searchContent}
        </Header>

        <div className="flex-1 overflow-y-auto flex flex-col">
          <main className="flex-1 p-4 md:px-6 lg:px-8 bg-gradient-to-r from-[#0f172a] via-[#020617] to-[#0f172a] ">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
