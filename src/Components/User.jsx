import React from 'react';

const User = ({ user, deleteUser, setUserToUpdate }) => {
  return (
    <li className="flex justify-between items-center p-4 border rounded">
      <span>{user.name}</span>
      <div className="space-x-2">
        <button
          onClick={() => deleteUser(user.id)}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => setUserToUpdate(user)}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Update
        </button>
      </div>
    </li>
  );
};

export default User;
