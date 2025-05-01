"use client";
import React, { useState } from "react";
import { Paperclip, Send } from "lucide-react";

export default function ChatUIComponent() {
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 h-full  flex flex-col md:flex-row font-sans">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-[#f7f7f8] border-r border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Coaches & Players</h2>
        <input
          type="text"
          placeholder="Search contacts"
          className="w-full p-2 text-sm border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-sm text-gray-800">Coach Smith</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-sm text-gray-800">Player Rahul</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <span className="text-sm text-gray-800">Coach Johnson</span>
            <span className="ml-auto text-xs text-gray-500">Last seen 2h ago</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <span className="text-sm text-gray-800">Player Virat</span>
            <span className="ml-auto text-xs text-gray-500">Last seen yesterday</span>
          </li>
        </ul>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="text-gray-800 font-semibold">Coach Smith</div>
          <div className="text-sm text-green-600">Online</div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="text-sm text-gray-700 bg-gray-100 w-fit p-3 rounded-xl max-w-xs">Hi there! How was your practice session yesterday?</div>
          <div className="text-sm text-white bg-blue-600 w-fit p-3 rounded-xl self-end max-w-xs ml-auto">It was great! I worked on my bowling technique as you suggested.</div>
          <div className="text-sm text-gray-700 bg-gray-100 w-fit p-3 rounded-xl max-w-xs">Great! Can you send me a video of your current form?</div>
          <div className="w-[400px] h-[240px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-xl">400</div>
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-3 flex items-center space-x-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Paperclip size={18} className="text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-700">
            <Send size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
} 
