import React, { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = ({ addUser }) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const onUserChange = (event) => {
    const { name, value } = event.target;
    console.log(`${name}, ${value}`);
  };

  const submitUser = (event) => {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const age = ageRef.current?.value;

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

    addUser({ username, age });
    usernameRef.current.value = "";
    ageRef.current.value = "";
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
        </h2>
        <form onSubmit={submitUser}>
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            name="username"
            id="username"
            type="text"
            onChange={onUserChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            ref={ageRef}
            name="age"
            id="age"
            type="text"
            onChange={onUserChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
