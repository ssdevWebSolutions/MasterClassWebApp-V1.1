// components/CricketStore.tsx
"use client";
import { useState } from "react";
import { ShoppingCart, Search, List, Box, CreditCard } from "lucide-react";

export default function CricketStore() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Sidebar */}
      {/* <aside className="bg-white w-full md:w-24 flex md:flex-col items-center py-6 border-r border-gray-200">
        <div className="space-y-8 flex md:flex-col flex-row">
          <button className="p-3 bg-[#fee2e2] rounded-lg hover:bg-red-100">
            <List size={24} className="text-red-500" />
          </button>
          <button className="p-3 bg-[#fee2e2] rounded-lg hover:bg-red-100">
            <Box size={24} className="text-red-500" />
          </button>
          <button className="p-3 bg-[#fee2e2] rounded-lg hover:bg-red-100">
            <CreditCard size={24} className="text-red-500" />
          </button>
        </div>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Cricket Store</h1>
            <p className="text-sm text-gray-500">Dashboard / Store</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="bg-white px-3 py-2 rounded-lg flex items-center gap-2 border">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-sm bg-transparent w-24 md:w-40"
              />
            </div>

            {/* Cart */}
            <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md text-sm gap-2 hover:bg-red-600">
              <ShoppingCart size={18} />
              2 Items
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {["All Products", "Bats", "Gloves", "Kits", "Equipment", "Accessories"].map((filter) => (
            <button
              key={filter}
              className="text-sm bg-white text-gray-600 px-4 py-2 rounded-lg border hover:bg-red-100"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {[
            {
              title: "MBT Genius Bat",
              img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            },
            {
              title: "SG Test Gloves",
              img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
            },
            {
              title: "KnockSensor Pads",
              img: "https://images.unsplash.com/photo-1588776814546-ec9ecbc30bc4",
            },
            {
              title: "Team Jersey",
              img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
            },
          ].map((product) => (
            <div key={product.title} className="bg-white p-4 rounded-lg shadow-sm flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <div className="w-full h-[300px] overflow-hidden rounded-lg mb-2">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="mt-auto text-xs text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Order</th>
                  <th className="px-4 py-2 font-semibold">Amount</th>
                  <th className="px-4 py-2 font-semibold">Date</th>
                  <th className="px-4 py-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { order: "MBT Genius Bat", amount: "$250.00", date: "May 01, 2025" },
                  { order: "SG Gloves", amount: "$120.00", date: "May 03, 2025" },
                  { order: "KnockSensor Pads", amount: "$80.00", date: "May 05, 2025" },
                  { order: "Team Jersey", amount: "$60.00", date: "May 06, 2025" },
                ].map((item) => (
                  <tr key={item.order} className="border-t">
                    <td className="px-4 py-2">{item.order}</td>
                    <td className="px-4 py-2">{item.amount}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">Delivered</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
