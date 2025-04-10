"use client";
import { useState } from "react";

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!password || !confirmPassword) {
      setError("All fields are required!");
      setSuccess(false);
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      console.log("Password reset successfully with:", password);
      // Perform your API call to reset password here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative bg-[#111111] text-white rounded-xl p-8 w-full max-w-md border border-yellow-500/30
        shadow-[0_0_30px_5px_rgba(253,224,71,0.4)]">
        
        {/* Lock Icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-400 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v1h4v-1zM6 9V7a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mt-4">Reset Password</h2>
        <p className="text-center text-yellow-400 mt-2 text-sm">
          Enter a new password and confirm it to reset your account.
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border border-yellow-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-transparent border border-yellow-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          {success && <p className="text-green-400 text-sm text-center mt-2">Password reset successfully!</p>}

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold w-full rounded-full py-2 mt-4 transition-colors"
          >
            Reset Password
          </button>
        </form>

        <div className="text-center mt-4">
          <button className="text-yellow-400 text-sm hover:underline">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
