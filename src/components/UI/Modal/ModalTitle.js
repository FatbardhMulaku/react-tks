import React from "react";
import { DialogTitle, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../UI/Logo/Logo";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: "24px 24px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#fff",
    backgroundColor: "#006fff",
    borderRadius: "50%",
    border: "1px solid transparent",
    padding: "5px",
    transition: "all 0.4s ease-in",
    "&:hover": {
      color: "#006fff",
      backgroundColor: "#fff",
      borderColor: "#006fff",
    },
  },
}));

const ModalTitle = (props) => {
  const classes = useStyles();
  return (
    <DialogTitle disableTypography={true} className={classes.title}>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={props.handleClose}
      >
        <CloseIcon />
      </IconButton>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="font_ubuntu text-capitalize text-center font-w-600">
          {props.title}
        </h4>
        <Logo logo="blue_logo" linkCss="logo_modal" text="col_primary" />
      </div>
    </DialogTitle>
  );
};

export default ModalTitle;
