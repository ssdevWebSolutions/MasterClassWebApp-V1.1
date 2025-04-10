// File: components/Header.js

export default function Header({ user }) {
    return (
      <div className="py-6 px-8">
        <h2 className="text-2xl font-semibold">
          Hi {user?.name || "User"}! Ready to master your next session?
        </h2>
      </div>
    );
  }
  