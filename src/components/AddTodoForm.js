import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import moment from "moment";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

const AddTodoMutation = graphql`
  mutation AddTodoFormAddTodoMutation($input: TodoInput) {
    add(input: $input) {
      id
    }
  }
`;

function AddTodoForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(Date.now());
  const [isError, setIsError] = useState(false);

  const [commitAddTodoMutation, isAddTodoMutationInFlight] =
    useMutation(AddTodoMutation);

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

    commitAddTodoMutation({
      variables: { input: { title, date } },
      onCompleted: () => {
        props.refresh();
      },
    });

    setTitle("");
    setDate(Date.now());
  }

  return (
    <div>
      <div className="form">
        <TextField
          label="Title"
          value={title}
          onChange={handleTitleChange}
          error={isError}
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            value={date}
            onChange={handleDateChange}
            renderInput={(pickerProps) => <TextField {...pickerProps} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          sx={{ width: "120px" }}
          onClick={handleButtonClick}
        >
          Add
        </Button>
      </div>
      <div className="formError">{isError && "Title can't be empty."}</div>
    </div>
  );
}

export default AddTodoForm;
