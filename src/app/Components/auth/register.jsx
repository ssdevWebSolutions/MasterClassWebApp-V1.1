// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';

// import { onInitalLoad, userRegisteration } from "../../redux/userRedux/RegisterAction";


// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [userStatus, setUserStatus] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const RegistrationStatus = useSelector((state) => state.user.UserAuth);
//   const Message = useSelector((state) => state.user.Message);

//   useEffect(() => {
//     dispatch(onInitalLoad());
//   }, [dispatch]);

//   useEffect(() => {
//     if (Message) {
//       if (RegistrationStatus) {
//         setUserStatus(true);
//         setMessage({ type: "success", text: Message });
        
//         // Navigate after slight delay for better UX
//         setTimeout(() => {
//           navigate("/login");
//         }, 1000);
//       } else {
//         setMessage({ type: "error", text: Message });
//       }
//     }
//   }, [RegistrationStatus, Message, navigate]);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobileNumber: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateUserData = (userData) => {
//     if (
//       !userData.name ||
//       !userData.email ||
//       !userData.mobileNumber ||
//       !userData.password ||
//       !userData.confirmPassword
//     ) {
//       return { type: "error", text: "Please enter all the details!" };
//     }

//     if (userData.password !== userData.confirmPassword) {
//       return { type: "error", text: "Passwords do not match!" };
//     }

//     if (!/^\d{10}$/.test(userData.mobileNumber)) {
//       return { type: "error", text: "Invalid mobile number! Must be 10 digits." };
//     }

//     return null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationError = validateUserData(formData);

//     if (validationError) {
//       setMessage(validationError);
//       return;
//     }

//     const requestBody = {
//       name: formData.name,
//       mail: formData.email,
//       mobile: formData.mobileNumber,
//       password: formData.password,
//     };

//     dispatch(userRegisteration(requestBody));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#111]">
//     <div className="bg-[#2e2e2e] p-6 rounded-xl shadow-lg w-full max-w-sm">
//       <h2 className="text-xl font-semibold text-white mb-4">Register</h2>
  
//       {message.text && (
//         <div className={`mb-3 p-2 rounded-md text-xs font-medium ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
//           {message.text}
//         </div>
//       )}
  
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm text-white mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
//           />
//         </div>
  
//         <div>
//           <label className="block text-sm text-white mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
//           />
//         </div>
  
//         <div>
//           <label className="block text-sm text-white mb-1">Mobile Number</label>
//           <input
//             type="text"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             placeholder="Enter your mobile number"
//             className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
//           />
//         </div>
  
//         <div>
//           <label className="block text-sm text-white mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
//           />
//         </div>
  
//         <div>
//           <label className="block text-sm text-white mb-1">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm your password"
//             className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
//           />
//         </div>
  
//         <button
//           type="submit"
//           className="w-full bg-white text-black text-sm font-semibold py-2 rounded-md hover:bg-gray-300 transition-all"
//         >
//           Register
//         </button>
  
//         <p className="text-center text-xs text-gray-400 mt-3">
//           Already registered? 
//           <a href="#" className="text-red-400 hover:underline ml-1"> <Link to="/login">Login</Link></a>
         
//         </p>
//       </form>
//     </div>
//   </div>
  
//   );
// };

// export default Register;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [userStatus, setUserStatus] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateUserData = (userData) => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.mobileNumber ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      return { type: "error", text: "Please enter all the details!" };
    }

    if (userData.password !== userData.confirmPassword) {
      return { type: "error", text: "Passwords do not match!" };
    }

    if (!/^\d{10}$/.test(userData.mobileNumber)) {
      return { type: "error", text: "Invalid mobile number! Must be 10 digits." };
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateUserData(formData);
    if (validationError) {
      setMessage(validationError);
      return;
    }

    try {
      // Simulate API call (replace with real API later)
      const response = await fakeRegisterApi(formData);

      if (response.success) {
        setUserStatus(true);
        setMessage({ type: "success", text: response.message });

        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        setMessage({ type: "error", text: response.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    }
  };

  const fakeRegisterApi = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Registration successful! Please login." });
      }, 800);
    });
  };

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111]">
      <div className="bg-[#2e2e2e] p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold text-white mb-4">Register</h2>

        {message.text && (
          <div className={`mb-3 p-2 rounded-md text-xs font-medium ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 rounded-md text-gray-300 text-sm placeholder-gray-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black text-sm font-semibold py-2 rounded-md hover:bg-gray-300 transition-all"
          >
            Register
          </button>

          <p className="text-center text-xs text-gray-400 mt-3">
            Already registered?
            <a href="#" onClick={handleLoginRedirect} className="text-red-400 hover:underline ml-1">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
