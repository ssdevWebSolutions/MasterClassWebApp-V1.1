"use client"; 

import React, { useEffect, useState } from "react";
import { onInitalLoad, userLoginVerification } from "../../../redux/userRedux/RegisterAction";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter  } from "next/navigation"; 
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const LoginStatus = useSelector((state) => state.user.loginVerified);
  const Message = useSelector((state) => state.user.Message);


  const [userStatus, setUserStatus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({
    emailOrMobile: "",
    password: "",
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    dispatch(onInitalLoad());
  }, [dispatch]);

  useEffect(() => {
    if (LoginStatus) {
      setUserStatus(true);
    }

    if (LoginStatus && Message) {
      setMessage({ type: "success", text: Message });
      router.push("/Components/Home/landingPage");
    } else if (!LoginStatus && Message) {
      setMessage({ type: "error", text: Message });
    }
  }, [LoginStatus, Message, router]);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formdata.emailOrMobile || !formdata.password) {
      setMessage({ type: "error", text: "Please enter all the details!" });
      return;
    }
  
    const requestBody = {
      emailOrmobile: formdata.emailOrMobile,
      password: formdata.password,
    };
  
    dispatch(userLoginVerification(requestBody));
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#252525] p-8 rounded-3xl shadow-2xl w-full max-w-md relative" style={{ boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)" }}>
        <h2 className="text-white text-center text-xl font-semibold mb-2">Masterclass Cricket</h2>
        <h1 className="text-white text-center text-3xl font-bold mb-1">Welcome Back!</h1>
        <p className="text-center text-red-500 mb-6">Login to continue</p>

        {/* Message */}
        {message.text && (
          <div
            className={`text-center text-sm font-medium py-2 mb-4 ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="text"
              name="emailOrMobile"
              placeholder="Email or Phone"
              value={formdata.emailOrMobile}
              onChange={handleChange}
              className="w-full bg-[#252525] text-white placeholder-white border border-red-400 rounded-full py-2 px-4 focus:outline-none"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full bg-[#252525] text-white placeholder-white border border-red-400 rounded-full py-2 px-4 focus:outline-none"
            />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="w-4 h-4" />
              <label htmlFor="remember" className="text-white text-xs">Remember Me</label>
            </div>
            {/* <Link to="/forgotpassword" className="text-red-500 text-xs" >Forgot Password?</Link> */}
            <Link href="/Components/auth/forgotPass" className="text-red-400 hover:underline ml-1">
                Forgot Password?
              </Link>   
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-full mb-4"
          >
            Login
          </button>

          <div className="text-center text-gray-400 text-sm mb-4">OR</div>

          <button
            type="button"
            className="w-full bg-white text-black font-bold py-2 rounded-full"
          >
            Continue with Google
          </button>

           <p className="text-center text-xs text-gray-400 mt-3">
              Don't have an account?
              <Link href="/Components/auth/register" className="text-red-400 hover:underline ml-1">
                Register
              </Link>            
            </p>

            
       
        </form>
      </div>
    </div>
  );
};

export default Login;
