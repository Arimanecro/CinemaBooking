import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Tabs, Tab, Typography, Box } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

type propsTab = {
  stars: string;
  description: string;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props: propsTab) {
  const { stars, description } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      className={classes.root}
      style={{
        width: "100%",
        position: "relative",
        marginTop: "230px",
        background: "transparent",
      }}
    >
      <Paper square>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Stars" {...a11yProps(1)} />
          <Tab label="Reviews(0)" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {stars}
      </TabPanel>
      <TabPanel value={value} index={2}>
        No Reviews
      </TabPanel>
    </div>
  );
}
