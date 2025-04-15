"use client";

import { useState } from "react";

const Tabs = () => {
  const tabs = ["Calendar", "My Plans", "Recommended", "History"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex space-x-6 mb-8 border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`pb-2 text-lg font-medium ${
            activeTab === index
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
