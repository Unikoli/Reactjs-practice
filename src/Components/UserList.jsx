import React from 'react';
import User from './User';

const UserList = ({ users, deleteUser, setUserToUpdate }) => {
  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUserToUpdate={setUserToUpdate}
        />
      ))}
    </ul>
  );
};

export default UserList;
