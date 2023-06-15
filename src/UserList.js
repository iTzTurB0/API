import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Phone:</strong> {user.phone} <br />
            <strong>Website:</strong> {user.website}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
