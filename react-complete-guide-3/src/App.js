import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([
    {id: 1, name: 'Uche', age: '20'}, 
    {id: 2, name: 'Kris', age: '21'}
  ]);
  
  const updateUsersListHandler = (userName, usersAge) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.push({id: updatedUsersList.length + 1, name: userName, age: usersAge});
      return updatedUsersList;
    });
  }

  return (
    <div>
      <AddUser
        onAddUser={updateUsersListHandler}
      />
      <UsersList
        users={usersList}
      />
    </div>
  );
}

export default App;
