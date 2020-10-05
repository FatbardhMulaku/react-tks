import React from "react";
import { Dialog, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = (props) => {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={props.open}
      TransitionComponent={Transition}
      onClose={props.handleClose}
      scroll="body"
    >
      {props.children}
    </Dialog>
  );
};

export default Modal;
