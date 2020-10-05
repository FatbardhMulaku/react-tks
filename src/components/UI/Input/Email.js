import React from "react";
import { InputAdornment, FormControl, OutlinedInput } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import { useInput } from "../../../Hooks/useInput";

const useStyles = makeStyles({
  formControl: {
    margin: "10px 0px",
    width: "100%",
  },
  icon: {
    marginRight: "13px",
    color: "#006fff",
  },
  inputOutline: {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#006fff",
    },
    borderColor: "#707070",
    borderRadius: "10px",

    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#006fff",
      borderWidth: "1px",
    },
  },
});

const EmailInput = (props) => {
  const classes = useStyles();
  const [value, setvalue] = useInput("");
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        className={classes.inputOutline}
        defaultValue={value}
        type="email"
        id="email-address"
        onChange={setvalue}
        startAdornment={
          <InputAdornment position="start">
            <PersonIcon className={classes.icon} />
          </InputAdornment>
        }
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};

export default EmailInput;
