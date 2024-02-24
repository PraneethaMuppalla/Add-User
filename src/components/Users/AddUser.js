import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";
import { useState } from "react";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: "", age: "" });
  const [error, setError] = useState(false);
  const adduserHandler = (e) => {
    e.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid input values",
      });
      return;
    }
    if (+userInput.age < 1 && userInput.age > 100) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age between 1 and 100",
      });
      return;
    }
    props.onAddUser({ ...userInput, id: Math.random() });
    setUserInput({ username: "", age: "" });
    setError(false);
  };
  const userNameHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, username: e.target.value };
    });
  };
  const agehandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, age: e.target.value };
    });
  };
  const errorhandler = () => {
    setError(false);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseErrorModal={errorhandler}
        />
      )}
      <Card className="input">
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userInput.username}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userInput.age}
            onChange={agehandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
