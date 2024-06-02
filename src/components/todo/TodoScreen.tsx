import { TextField, ToggleButton, ToggleButtonGroup, Tabs, Tab, Box, Typography } from "@mui/material";
import "./TodoScreen.css";
import React, { useState } from "react";

const TabPanel = (props) => {
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

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TodoScreen = () => {
    const [value, setValue] = useState(0);

    const childrenToggles = [
        <ToggleButton value='left' key='left'>
            Dark
        </ToggleButton>,
        <ToggleButton value='right' key='right'>
            Light
        </ToggleButton>
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="main-screen">
        <ToggleButtonGroup>
            {childrenToggles}
        </ToggleButtonGroup>
        <h2>Todo List</h2>
        <TextField label='Search Todos'></TextField>
        <div>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            Item One Content
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two Content
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three Content
        </TabPanel>
        </div>
        </div>
    );
};

export default TodoScreen;
