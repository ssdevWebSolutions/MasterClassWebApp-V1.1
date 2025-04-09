// page.js

async function getUsers() {
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const users = await res.json();
  return users;
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <main>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userid}>
            {user.name} - {user.mailid} - {user.mobile_number}
          </li>
        ))}
      </ul>
    </main>
  );
}
