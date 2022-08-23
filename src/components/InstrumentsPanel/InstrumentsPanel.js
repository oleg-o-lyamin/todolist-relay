import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import "./InstrumentsPanel.css";

function InstrumentsPanel({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleSwitchChange() {
    setIsChecked((prevState) => {
      onChange(!prevState);
      return !prevState;
    });
  }

  return (
    <div className="instrumentsPanel">
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>All</Typography>
        <Switch
          inputProps={{ "aria-label": "ant design" }}
          checked={isChecked}
          onChange={handleSwitchChange}
        />
        <Typography>Pending</Typography>
      </Stack>
    </div>
  );
}

export default InstrumentsPanel;
