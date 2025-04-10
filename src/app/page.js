// page.js

import ForgotPass from "./Components/auth/ForgotPass";
import Login from "./Components/auth/login";
import Register from "./Components/auth/register";
import Verification from "./Components/auth/Verification";
import Landing from "./Components/Landing pages/landing";
import Navbar from "./Components/Landing pages/Navbar";
import Profile from "./Components/Landing pages/Profile";

// async function getUsers() {
//   const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('Failed to fetch users');
//   }

//   const users = await res.json();
//   return users;
// }

export default async function HomePage() {
  

  return (
    <main>
        <Login />
        <Register />
        <ForgotPass />
        <Verification />
        <Navbar />
        <Profile />
        <Landing />
    </main>
  );
}
