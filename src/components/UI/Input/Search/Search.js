import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, Divider, IconButton, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { motion, AnimatePresence } from "framer-motion";
import { useInput } from "../../../../Hooks/useInput";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "100%",
    height: "50px",
    backgroundColor: "#fff",
    transition: "all 2s linear",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const variants = {
  initial: {
    opacity: 0,
    y: -51,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -51,
  },
};

const Search = (props) => {
  const classes = useStyles();
  const [value, setValue] = useInput("");
  return (
    <AnimatePresence>
      {props.isSearch && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={variants}
          key="auniquestring"
        >
          <div
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid lightgray",
            }}
          >
            <Container maxWidth="lg" className={classes.root}>
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                value={value}
                onChange={setValue}
                className={classes.input}
                placeholder="Search..."
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
            </Container>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
