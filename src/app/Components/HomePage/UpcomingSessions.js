// File: components/UpcomingSessions.js

export default function UpcomingSessions({ sessions = [] }) {
    return (
      <div className="px-8 mt-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map((session, i) => (
            <div key={i} className="bg-red-50 p-4 rounded-xl shadow">
              <p className="font-semibold text-lg mb-2">{session.time}</p>
              <p className="text-gray-700 mb-4">{session.title}</p>
              <button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                {session.buttonLabel || "View Details"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  