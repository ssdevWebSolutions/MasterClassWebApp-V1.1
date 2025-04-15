"use client";
import { Nav } from "react-day-picker";
// import page from "./Components/dashboard";

import Login from "./Components/auth/login/page";
import DashboardPage from "./dashboard/page";
import Navbar from "./Components/Home/Navbar";

// async function getUsers() {
//   const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('Failed to fetch users');
//   }

//   const users = await res.json();
//   return users;
// }

export default  function HomePage() {
  

  return (
    <main>
        <Login />
        {/* <Register />
        <ForgotPass />
        <Verification />
        <Navbar />
        <Profile />
        <Landing /> */}
        {/* <Navbar />
        <DashboardPage /> */}
    </main>
  );
}
