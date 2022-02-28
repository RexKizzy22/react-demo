import React from "react";
import Card from "../UI/Card/Card";
import classes from "./UserList.module.css";


const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;