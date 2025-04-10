"use client";

import { ShoppingCart, User, LogOut, Menu, Calendar, Home } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // ✅ for Next.js navigation

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // ✅ for navigation

  const handleLogout = () => {
    // Remove token from session storage
    sessionStorage.removeItem("token");

    // Clear Redux state (assuming a `LOGOUT` action exists)
    dispatch({ type: "LOGOUT" });

    // Redirect to home page
    router.push("/");

    // Reload the page to clear any remaining state
    window.location.reload();
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
      <div className="flex gap-6 text-red-600 font-bold">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/landing")}>
          <Home size={20} /> Home
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/booking")}>
          <Calendar size={20} /> Classes
        </div>
      </div>
      <div className="flex gap-6 text-red-600 font-bold items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/profile")}>
          <User size={20} /> My Account
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
          <LogOut size={20} /> Sign out
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/cart")}>
          <ShoppingCart size={20} /> Basket
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Menu size={20} /> About Us
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
