"use client"
import React, { useState } from "react";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "James Anderson",
    role: "Fast Bowler",
    team: "Lancashire County Cricket Club",
    email: "james.anderson@example.com",
    phone: "+44 7700 900123",
    bio: "Professional cricket player specializing in fast bowling with over 10 years of experience.",
    preferredTime: "Morning",
    sharePerformance: false,
    emailNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // send formData to backend here
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <p className="text-sm text-gray-500 mb-6">Personal Information</p>

      <div className="flex items-center gap-6 mb-8">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-2xl"
        />
        <button className="text-red-500 hover:underline">Change Photo</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Team</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          />
        </div>

        <div className="pt-4">
          <h3 className="font-semibold">Contact Information</h3>
          <label className="block text-sm mt-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          />

          <label className="block text-sm mt-4">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          />
        </div>

        <div className="pt-4">
          <h3 className="font-semibold">Additional Information</h3>

          <label className="block text-sm mt-2">Bio</label>
          <textarea
            name="bio"
            rows="3"
            value={formData.bio}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          ></textarea>

          <label className="block text-sm mt-4">Preferred Training Time</label>
          <input
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-100 rounded-md"
          />
        </div>

        <div className="pt-4">
          <h3 className="font-semibold">Privacy Settings</h3>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="text-sm font-medium">Share Performance Data with Team</p>
              <p className="text-xs text-gray-500">Allow coaches and team members to view your stats</p>
            </div>
            <input
              type="checkbox"
              name="sharePerformance"
              checked={formData.sharePerformance}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-sm font-medium">Email Notifications</p>
              <p className="text-xs text-gray-500">Receive updates about training sessions</p>
            </div>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </div>
        </div>

        <div className="pt-6 flex gap-4">
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
