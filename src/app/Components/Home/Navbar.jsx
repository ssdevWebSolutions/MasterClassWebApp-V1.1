"use client";

import { ShoppingCart, User, LogOut, Menu, Calendar, Home, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu toggle

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    router.push("/");
    window.location.reload();
  };

  const menuItems = [
    { label: "Home", icon: <Home size={20} />, path: "/landing" },
    { label: "Classes", icon: <Calendar size={20} />, path: "/booking" },
    { label: "My Account", icon: <User size={20} />, path: "/profile" },
    { label: "Basket", icon: <ShoppingCart size={20} />, path: "/cart" },
    { label: "About Us", icon: <Menu size={20} />, path: "/about" },
  ];

  return (
    <nav className="border-b border-gray-300  px-4 md:px-8 py-4 flex justify-between items-center">
      {/* Logo or Name */}
      {/* <div
        className="text-red-600 font-extrabold text-xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        MyWebsite
      </div> */}

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-red-600 font-bold items-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:text-red-800 transition"
            onClick={() => router.push(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-red-800 transition"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          <span>Sign out</span>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-red-600 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 z-50 text-red-600 font-bold gap-4 md:hidden">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:text-red-800 transition w-full"
              onClick={() => {
                router.push(item.path);
                setMenuOpen(false);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-red-800 transition w-full"
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
          >
            <LogOut size={20} />
            <span>Sign out</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
