import { FiTag, FiCalendar, FiExternalLink, FiCopy } from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaUtensils, FaStethoscope } from 'react-icons/fa';
import { Dumbbell } from 'lucide-react';

export default function PartnersDiscounts() {
  return (    <div className="max-w-5xl mx-auto p-4 space-y-6 text-gray-800 sm:p-2  md:p-4 lg:p-8">

      {/* Header */}
      <div className="text-sm text-gray-500">Dashboard &gt; <span className="text-black font-medium">Partners & Discounts</span></div>
      <h1 className="text-3xl font-semibold">Partners</h1>
      <p className="text-gray-600 max-w-xl">
        Our official partners providing exclusive benefits for members
      </p>

      {/* Partners Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-red-50 p-5 rounded-xl">
          <div className="bg-red-100 rounded-full mb-2 p-2 inline-flex items-center text-red-500 justify-center"><FaDumbbell /></div>
          <p className="text-xs text-gray-500 font-semibold">EQUIPMENT PARTNER</p>
          <h3 className="text-lg font-semibold">Cricket Gear Pro</h3>
          <p className="text-sm text-gray-600 mt-1">Premium cricket equipment with exclusive 15% discount for Masterclass members.</p>
          <button className="mt-4 text-white bg-red-500 px-4 py-1.5 text-sm rounded-md">Visit Website</button>
        </div>
        <div className="bg-red-50 p-5 rounded-xl">
          <div className="bg-red-100 rounded-full mb-2 p-2 inline-flex items-center text-red-500 justify-center"><Dumbbell /></div>
          <p className="text-xs text-gray-500 font-semibold">FITNESS PARTNER</p>
          <h3 className="text-lg font-semibold">SportsFit</h3>
          <p className="text-sm text-gray-600 mt-1">Professional fitness equipment and supplements for cricket players.</p>
          <button className="mt-4 text-white bg-red-500 px-4 py-1.5 text-sm rounded-md">Visit Website</button>
        </div>
        <div className="bg-red-50 p-5 rounded-xl">
          <div className="bg-red-100 rounded-full mb-2 p-2 inline-flex items-center text-red-500 justify-center"><FaStethoscope /></div>
          <p className="text-xs text-gray-500 font-semibold">HEALTHCARE PARTNER</p>
          <h3 className="text-lg font-semibold">CricHealth</h3>
          <p className="text-sm text-gray-600 mt-1">Sports medicine specialists offering priority appointments for members.</p>
          <button className="mt-4 text-white bg-red-500 px-4 py-1.5 text-sm rounded-md">Visit Website</button>
        </div>
        <div className="bg-red-50 p-5 rounded-xl">
          <div className="bg-red-100 rounded-full mb-2 p-2 inline-flex items-center text-red-500 justify-center"><FaUtensils /></div>
          <p className="text-xs text-gray-500 font-semibold">NUTRITION PARTNER</p>
          <h3 className="text-lg font-semibold">NutriSport</h3>
          <p className="text-sm text-gray-600 mt-1">Sports nutrition experts providing personalized meal plans for athletes.</p>
          <button className="mt-4 text-white bg-red-500 px-4 py-1.5 text-sm rounded-md">Visit Website</button>
        </div>
      </div>

      {/* Exclusive Discounts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Exclusive Discounts</h2>
        <p className="text-gray-600 mb-6">Special offers and discount codes from our partners</p>
        <div className="space-y-3">
          {[
            { title: '15% Off Cricket Gear Pro', date: 'Valid until Dec 31, 2023' },
            { title: 'Free SportsFit Trial Month', date: 'Valid until Nov 30, 2023' },
            { title: '20% Off NutriSport Supplements', date: 'Valid until Jan 15, 2024' },
            { title: 'Free Initial Consultation at CricHealth', date: 'Valid until Feb 28, 2024' },
            { title: '10% Off Cricket Academy Workshops', date: 'Valid until Mar 31, 2024' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center px-4 py-3 rounded-md">
              <div className="flex items-center gap-3 ">
                <div className="bg-red-50 rounded-md p-2 inline-flex items-center justify-center">
                    <FiTag className="text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-sm text-black">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
              <FiCopy className="text-gray-400 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Offers */}
      <div>
        <h2 className="text-xl font-semibold mb-4 mt-10">Seasonal Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Holiday Special',
              subtitle: 'LIMITED TIME',
              desc: '25% off all Cricket Gear Pro equipment during December. Use code HOLIDAY25.',
              code: 'Copy Code',
              link: 'Visit Site'
            },
            {
              title: 'Pre-Season Bundle',
              subtitle: 'UNTIL FEB 15',
              desc: 'Complete training kit with bat, pads, and gloves at 30% discount. Use code PRESEASON30.',
              code: 'Copy Code',
              link: 'Visit Site'
            },
            {
              title: 'Summer Camp Discount',
              subtitle: 'SUMMER 2024',
              desc: '15% off summer cricket camps for juniors. Register with code SUMMER15.',
              code: 'Copy Code',
              link: 'Visit Site'
            }
          ].map((offer, i) => (
            <div key={i} className="bg-red-50 p-5 rounded-xl">
              <div className="text-red-500 mb-2"><FiCalendar /></div>
              <p className="text-xs text-gray-500 font-semibold">{offer.subtitle}</p>
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{offer.desc}</p>
              <div className="flex gap-2 mt-4">
                <button className="text-white bg-red-500 px-4 py-1.5 text-sm rounded-md">{offer.code}</button>
                <button className="text-red-500 border border-red-500 px-4 py-1.5 text-sm rounded-md">{offer.link}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
