// File Path: app/dashboard/layout.jsx

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Home", path: "/dashboard" },
  { name: "Bookings", path: "/dashboard/bookings" },
  { name: "Reports", path: "/dashboard/reports" },
  { name: "Media", path: "/dashboard/media" },
  { name: "Nutrition", path: "/dashboard/nutrition" },
  { name: "Conditioning", path: "/dashboard/conditioning" },
  { name: "Match Stats", path: "/dashboard/match-stats" },
  { name: "Store", path: "/dashboard/store" },
  { name: "Partners", path: "/dashboard/partners" },
  { name: "Motion Tracker", path: "/dashboard/skeleton-tracker" },
  { name: "Chat", path: "/dashboard/chat" },
  { name: "Profile", path: "/dashboard/profile" },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr]">
      <aside className="bg-gray-100 p-4 border-r">
        <h1 className="text-2xl font-bold mb-6">🏏 Masterclass</h1>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                "text-sm font-medium px-3 py-2 rounded hover:bg-gray-200 transition",
                pathname === item.path ? "bg-gray-300 text-black" : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="p-6 bg-white overflow-y-auto">{children}</main>
    </div>
  );
}
