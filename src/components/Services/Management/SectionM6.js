import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Styles/SectionM6.css";
import { useTranslation } from "react-i18next";

const BackEnd_icon = [
  "BackEnd1",
  "BackEnd2",
  "BackEnd3",
  "BackEnd4",
  "BackEnd5",
  "BackEnd6",
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 384,
    width: "100%",
    marginTop: "50px",
    marginBottom: "50px",
  },
  tabs: {
    textAlign: "left",
  },
  title: {
    marginTop: "50px",
  },
  TabPanel: {
    width: "80%",
  },
  tab: {
    textAlign: "left",
    "&:active": {},
    "&:focus": {
      color: "#006FFF",
      fontWeight: "bold",
    },
  },
}));

function SectionM6() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t } = useTranslation();

  return (
    <div className="container-lg">
      <h2 className={classes.title}>TECHNOLOGIES WE WORK WITH </h2>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Back End" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Front end" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Mobile" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Cloud" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Platforms" {...a11yProps(4)} />
          <Tab
            className={classes.tab}
            label="Traditional databases"
            {...a11yProps(5)}
          />
          <Tab className={classes.tab} label="Big data" {...a11yProps(6)} />
          <Tab className={classes.tab} label="DevOps" {...a11yProps(7)} />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
          className={`${classes.TabPanel} BackEnd`}
        >
          <h3>Back end</h3>
          <p className="my-4">{t("Management.section_6.Back_endDesc")} </p>
          <div className="row BackEnd_icon">
            {BackEnd_icon.map((item, index) => {
              return <div key={index} className={item} />;
            })}
            ;
          </div>
          <div className="row BackEnd_info">
            {t("Management.section_6.Back_end").map((item, index) => {
              return (
                <p key={index} className="col-6">
                  {item.items}
                </p>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.TabPanel}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.TabPanel}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.TabPanel}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.TabPanel}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.TabPanel}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6} className={classes.TabPanel}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7} className={classes.TabPanel}>
          Item Seven
        </TabPanel>
      </div>
    </div>
  );
}

export default SectionM6;
