"use client";

import Login from "./Components/auth/login/page";

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
    </main>
  );
}
