import React from "react";
import { createPortal } from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const Modal = ({ title, message, hideErrorModal }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={hideErrorModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, hideErrorModal }) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={hideErrorModal} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Modal
          onConfirm={hideErrorModal}
          title={title}
          message={message}
          hideErrorModal={hideErrorModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
