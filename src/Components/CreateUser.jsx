import React, { useState } from 'react';

const CreateUser = ({ addUser }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ id: Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default CreateUser;
