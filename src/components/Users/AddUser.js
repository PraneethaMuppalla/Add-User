import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import { useState } from "react";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: "", age: "" });
  const adduserHandler = (e) => {
    e.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      return;
    }
    if (+userInput.age < 1) {
      return;
    }
    props.onAddUser({ ...userInput, id: Math.random() });
    setUserInput({ username: "", age: "" });
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
  return (
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
  );
};

export default AddUser;
