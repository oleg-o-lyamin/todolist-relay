import React, { useState } from "react";
import ExpirationDate from "./ExpirationDate";
import Checkbox from "@mui/material/Checkbox";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import fetchGraphQL from "../server/fetchGraphQL";

function Todo({ todo, onDelete }) {
  const [completed, setCompleted] = useState(todo.completed);
  const [isDeleteInFocus, setIsDeleteInFocus] = useState(false);

  function handleCheckTodo(todo) {
    const { id } = todo;
    fetchGraphQL(
      `mutation edit($id: String!, $input: TodoInput) {
        edit(id: $id, input: $input) {
          completed
        }
    }`,
      { id, input: { completed: !completed } }
    ).then((data) => {
      setCompleted(() => data.data.edit.completed);
    });
  }

  function handleDeleteFocus(value) {
    setIsDeleteInFocus(() => value);
  }

  return (
    <div className={`${isDeleteInFocus ? "focused" : null}  todoWrapper`}>
      <Checkbox
        icon={<CircleUnchecked />}
        checkedIcon={<CircleCheckedFilled />}
        sx={{ paddingTop: 0, paddingLeft: 0 }}
        onClick={(_) => handleCheckTodo(todo)}
        checked={completed}
      />
      <div>
        <div className={`${completed ? "completed" : null} title`}>
          {todo.title.length > 30
            ? todo.title.substring(0, 30) + "..."
            : todo.title}
        </div>
        <ExpirationDate date={todo.date} />
      </div>
      <div className="deleteButton">
        <IconButton
          aria-label="delete"
          onMouseOver={() => handleDeleteFocus(true)}
          onMouseOut={() => handleDeleteFocus(false)}
          onClick={(_) => onDelete(todo)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Todo;
