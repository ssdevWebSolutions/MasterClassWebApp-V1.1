// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ForgotPass = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const navigate = useNavigate();
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) {
//       setError("Email or Phone is required!");
//       setSubmitted(false);
//     } else {
//       setError("");
//       setSubmitted(true);
//       console.log("Form submitted:", inputValue);
//       navigate("/verification")
//     }
//   };

//   return (
//     <div className="flex items-center  justify-center min-h-screen bg-black">
//     <div className="relative bg-[#111111] text-white rounded-xl p-8 w-full max-w-md border border-yellow-500/30 shadow-[0_0_30px_5px_rgba(253,224,71,0.3)]">        {/* Lock icon */}
//         <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//           <div className="bg-yellow-400 p-3 rounded-full">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v1h4v-1zM6 9V7a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1z" />
//             </svg>
//           </div>
//         </div>

//         <h2 className="text-2xl font-bold text-center mt-4">Forgot Password?</h2>
//         <p className="text-center text-yellow-400 mt-2 text-sm">
//           Enter your registered email or phone number. <br />
//           We’ll send you a reset link/code.
//         </p>

//         <form onSubmit={handleSubmit} className="mt-6">
//           <input
//             type="text"
//             placeholder="Email or Phone"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className="w-full p-3 rounded-full bg-[#222] border border-yellow-500/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
//           />
//           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full mt-6 transition-all duration-300"
//           >
//             Send OTP
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <button className="text-yellow-400 hover:underline text-sm">
//             Back to Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPass;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPass = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError("Email or Phone is required!");
    } else {
      setError("");
      console.log("Form submitted:", inputValue);
      router.push("/verification"); // ✅ Navigate in Next.js
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative bg-[#111111] text-white rounded-xl p-8 w-full max-w-md border border-yellow-500/30 shadow-[0_0_30px_5px_rgba(253,224,71,0.3)]">
        
        {/* Lock icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-400 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v1h4v-1zM6 9V7a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mt-4">Forgot Password?</h2>
        <p className="text-center text-yellow-400 mt-2 text-sm">
          Enter your registered email or phone number. <br />
          We’ll send you a reset link/code.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            placeholder="Email or Phone"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-3 rounded-full bg-[#222] border border-yellow-500/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full mt-6 transition-all duration-300"
          >
            Send OTP
          </button>
        </form>

        <div className="text-center mt-4">
          <button 
            className="text-yellow-400 hover:underline text-sm"
            onClick={() => router.push("/login")} // Optional: back to login page
          >
            Back to Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default ForgotPass;
