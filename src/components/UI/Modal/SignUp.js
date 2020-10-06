import React from "react";
import "./Modal.css";
import Modal from "./Modal";
import ModalTitle from "./ModalTitle";
import { DialogContent } from "@material-ui/core";

const SignUp = (props) => {
  const { open, handleClose } = props;

  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalTitle title="sign up" handleClose={handleClose} />
      <DialogContent>sign up content</DialogContent>
    </Modal>
  );
};

export default SignUp;
