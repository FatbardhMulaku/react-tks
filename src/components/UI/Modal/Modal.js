import React from "react";
import { Dialog, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  modal: {
    "& .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody, .MuiDialog-paperFullWidth": {
      [theme.breakpoints.down("xs")]: {
        maxWidth: "calc(100% - 36px)",
      },
    },
    "& .MuiDialog-paperFullWidth": {
      [theme.breakpoints.down("xs")]: {
        width: "calc(100% - 36px)",
      },
      margin: "18px",
    },
  },
}));
const Modal = (props) => {
  const classes = useStyles();
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={props.open}
      className={classes.modal}
      TransitionComponent={Transition}
      onClose={props.handleClose}
      scroll="body"
    >
      {props.children}
    </Dialog>
  );
};

export default Modal;
