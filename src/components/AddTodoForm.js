import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import moment from "moment";

function AddTodoForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(Date.now());
  const [isError, setIsError] = useState(false);

  function handleTitleChange(event) {
    setIsError(() => false);
    setTitle(event.target.value);
  }

  function handleDateChange(event) {
    setDate(() => parseFloat(moment(event._d).format("x")));
  }

  function handleButtonClick() {
    if (title == null || title === "") {
      setIsError(() => true);
      return;
    }

    props.onAdd({ title, date });
    setTitle("");
    setDate(Date.now());
  }

  return (
    <div className="form">
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={handleTitleChange}
        error={isError}
      />
      {isError && <p className="formError">Title can't be empty.</p>}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          value={date}
          onChange={handleDateChange}
          renderInput={(pickerProps) => (
            <TextField {...pickerProps} fullWidth sx={{ marginTop: "20px" }} />
          )}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        sx={{ marginTop: "20px", maxWidth: "100px" }}
        onClick={handleButtonClick}
      >
        Add
      </Button>
    </div>
  );
}

export default AddTodoForm;
