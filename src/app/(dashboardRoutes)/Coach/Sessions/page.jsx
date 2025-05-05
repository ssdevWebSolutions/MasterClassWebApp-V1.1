"use client";
import { useState } from "react";
import UpcomingSessionsTab from "./UpcomingSessions/page";
import PastSessions from "./PastSessions/page";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const router = useRouter();
 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "create") {
      router.push("/Coach/CreateSession"); // ✅ Correct path (adjust if needed)
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">My Sessions</h1>
      <div className="flex space-x-8 border-b mb-6">
        {["upcoming", "past", "create"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-2 capitalize ${
              activeTab === tab
                ? "border-b-2 border-black font-medium"
                : "text-gray-400"
            }`}
          >
            {tab === "create" ? "Create New" : tab}
          </button>
        ))}
      </div>

      {activeTab === "upcoming" && <UpcomingSessionsTab />}
      {activeTab === "past" && <PastSessions />}
      {/* "Create New" will navigate, not render */}
    </div>
  );
};

export default Tabs;
