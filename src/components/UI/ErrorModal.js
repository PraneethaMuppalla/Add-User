import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onCloseErrorModal} />,
        document.getElementById("back-drop")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onCloseErrorModal}
        />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ErrorModal;
