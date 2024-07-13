import React, { useState } from 'react';
import './App.css';
import CreateUser from './Components/CreateUser';
import UserList from './Components/UserList';
import UpdateUser from './Components/UpdateUser';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToUpdate, setUserToUpdate] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    // if(window.alert){
    //   alert('are you sure want to delete it?')
    //   setUsers(users.filter((user) => user.id !== id));
    // }
    if(window.confirm('are you sure want to delete?')){
      setUsers(users.filter((user) => user.id !== id));
    }
   
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setUserToUpdate(null);
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CRUD Demo</h1>
      <CreateUser addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} setUserToUpdate={setUserToUpdate} />
      <UpdateUser userToUpdate={userToUpdate} updateUser={updateUser} />
    </div>
  );
};

export default App;
