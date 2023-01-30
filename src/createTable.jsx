import React from 'react';
const url = 'https://randomuser.me/api/?results=5&nat=us&inc=gender,name,email';

export function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setUsers(json.results));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Gender</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>
              {user.name.title}. {user.name.first} {user.name.last}
            </td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
