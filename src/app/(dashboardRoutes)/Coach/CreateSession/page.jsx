"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users } from "lucide-react";

const CreateSessionForm = () => {
  const router = useRouter();

  const [sessionName, setSessionName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [players, setPlayers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ sessionName, dateTime, location, description, players });
    router.push("/Coach/Sessions"); // Go back after creation
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <p className="text-sm text-gray-500 mb-2">
        <button onClick={() => router.back()} className="hover:underline text-blue-600">
          My Sessions
        </button>{" "}
        &gt; <span className="text-black">Create New</span>
      </p>

      <h1 className="text-2xl font-semibold mb-8">Create New Session</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Session Details */}
        <div>
          <h2 className="text-lg font-medium mb-4">Session Details</h2>

          {/* Session Name */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Session Name</label>
            <input
              type="text"
              placeholder="Enter session title"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              className="w-full border rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Date & Time */}
          <div className="mb-6 relative">
            <label className="block text-sm mb-2">Date & Time</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full border rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none"
            />
            <Calendar className="w-5 h-5 text-gray-400 absolute right-3 top-11" />
          </div>

          {/* Location */}
          <div className="mb-6 relative">
            <label className="block text-sm mb-2">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none"
            />
            <MapPin className="w-5 h-5 text-gray-400 absolute right-3 top-11" />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Description</label>
            <textarea
              placeholder="Add session notes (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none"
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Players */}
        <div>
          <h2 className="text-lg font-medium mb-4">Players</h2>
          <div className="relative">
            <label className="block text-sm mb-2">Add Players</label>
            <input
              type="text"
              placeholder="Search or select players"
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
              className="w-full border rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none"
            />
            <Users className="w-5 h-5 text-gray-400 absolute right-3 top-11" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 text-sm font-medium"
        >
          Create Session
        </button>
      </form>
    </div>
  );
};

export default CreateSessionForm;
