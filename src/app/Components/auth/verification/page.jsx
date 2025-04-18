"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/g, ""); // Only numbers
    if (!value) return;
    let newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);
    if (index < 5 && value) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault(); // prevent weird behavior
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const resendOtp = () => {
    if (timer === 0) {
      setOtp(["", "", "", "", "", ""]);
      setTimer(30);
      // Resend OTP API call goes here
      console.log("OTP Resent!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    console.log("Verifying OTP:", fullOtp);
    router.push("/Components/auth/resetPass");

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image 
          src="/images/logo_.ico" 
          alt="Logo" 
          width={70} 
          height={70} 
          priority
        />
      </div>

      <h2 className="text-white text-2xl font-semibold mb-2">Enter OTP</h2>
      <p className="text-gray-400 text-center mb-6">
        We've sent a 6-digit code to your registered phone/email.<br />
        Please enter it below.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full max-w-sm">
        <div className="flex gap-3">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-12 h-12 text-center text-white border border-red-500 rounded-full bg-black focus:outline-none focus:border-yellow-400"
            />
          ))}
        </div>

        <div className="text-gray-400 text-sm flex gap-1">
          {timer > 0 ? (
            <span>
              Resend OTP in <span className="text-red-500">{timer}s</span>
            </span>
          ) : (
            <button 
              type="button" 
              className="text-red-500 hover:underline" 
              onClick={resendOtp}
            >
              Resend OTP
            </button>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-semibold transition"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default Verification;
