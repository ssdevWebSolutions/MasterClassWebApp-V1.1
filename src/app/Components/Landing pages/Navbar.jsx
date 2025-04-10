// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { ShoppingCart, User, LogOut, Menu, Calendar, Users, HomeIcon, Home } from "lucide-react";

// const Navbar = () => {
//   const navigate = useNavigate(); // ✅ Hooks inside function body
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);


//   const handleLogout = () => {
//     // Remove token from session storage
//     sessionStorage.removeItem("token");

//     // Clear Redux state (assuming a `LOGOUT` action exists)
//     dispatch({ type: "LOGOUT" });

    
//     // Redirect to home page
//     navigate("/");

//     // Reload the page to clear any remaining state
//     window.location.reload();
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
//       <div className="flex gap-6 text-red-600 font-bold">
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/landing")}>
//           <Home size={20} /> Home
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/booking")}>
//           <Calendar size={20} /> Classes
//         </div>
//       </div>
//       <div className="flex gap-6 text-red-600 font-bold items-center">
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/profile")}>
//           <User size={20} /> My Account
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
//           <LogOut size={20} /> Sign out
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer relative" onClick={() => navigate("/cart")}>
//           <ShoppingCart size={20} /> Basket
//           {cartItems.length > 0 && (
//             <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 absolute top-[-8px] right-[-10px]">
//               {cartItems.length}
//             </span>
//           )}
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer">
//           <Menu size={20} /> About Us
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import { ShoppingCart, User, LogOut, Menu, Calendar, Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
      {/* Left Side */}
      <div className="flex gap-6 text-red-600 font-bold">
        <div className="flex items-center gap-2 cursor-pointer">
          <Home size={20} /> Home
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Calendar size={20} /> Classes
        </div>
      </div>

      {/* Right Side */}
      <div className="flex gap-6 text-red-600 font-bold items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <User size={20} /> My Account
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <LogOut size={20} /> Sign out
        </div>
        <div className="flex items-center gap-2 cursor-pointer relative">
          <ShoppingCart size={20} /> Basket
          {/* Static badge example */}
          <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 absolute top-[-8px] right-[-10px]">
            3
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Menu size={20} /> About Us
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
