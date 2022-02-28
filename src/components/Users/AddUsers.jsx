import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = ({ addUser }) => {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    username: "",
    age: "",
  });
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
  });

  const onUserChange = (event) => {
    const { name, value } = event.target;
    console.log(`${name}, ${value}`);
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitUser = (event) => {
    event.preventDefault();

    const { username, age } = user;

    if (!username && !age) {
      setError({
        title: "Invalid Input!",
        message: "You must fill the form",
      });
      return;
    } else if (!username) {
      setError({
        title: "Invalid Username!",
        message: "You must enter a username",
      });
      return;
    } else if (!age || Number(age) <= 0) {
      setError({
        title: "Invalid Age!",
        message: "You must enter a username",
      });
      return;
    }

    setNewUser(user);
    addUser(user);
    setUser({
      username: "",
      age: "",
    });
  };

  const hideErrorModal = (_) => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          hideErrorModal={hideErrorModal}
        />
      )}
      <Card className={classes.input}>
        <h2 style={{ textAlign: "center" }}>
          {newUser.username &&
            newUser.age &&
            `${newUser.username} is ${newUser.age} old`}
        </h2>
        <form onSubmit={submitUser}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            onChange={onUserChange}
            value={user.username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            name="age"
            id="age"
            type="text"
            onChange={onUserChange}
            value={user.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
