import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
  const userNameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState(false);
  const adduserHandler = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const age = ageRef.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid input values",
      });
      return;
    }
    if (+age < 1 || +age > 100) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age between 1 and 100",
      });
      return;
    }
    props.onAddUser({ username, age, id: Math.random() });
    setError(false);
    userNameRef.current.value = "";
    ageRef.current.value = "";
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
          <input id="username" type="text" ref={userNameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageRef} />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
