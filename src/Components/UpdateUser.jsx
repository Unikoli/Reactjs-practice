import React, { useState, useEffect } from 'react';

const UpdateUser = ({ userToUpdate, updateUser }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (userToUpdate) {
      setName(userToUpdate.name);
    }
  }, [userToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ ...userToUpdate, name });
    setName('');
  };

  return userToUpdate ? (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Update User
      </button>
    </form>
  ) : null;
};

export default UpdateUser;
