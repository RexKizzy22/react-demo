import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/UserList/UserList";


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    console.log(user.username, user.age);
    setUsers(prevValue => [ user,...prevValue ]);
  }

  return (
    <div>
      <AddUsers addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
