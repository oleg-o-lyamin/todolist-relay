import React, { useState } from "react";
import ExpirationDate from "./ExpirationDate";
import Checkbox from "@mui/material/Checkbox";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { TextField } from "@mui/material";

const TodoDeleteMutation = graphql`
  mutation TodoDeleteMutation($id: String!) {
    delete(id: $id)
  }
`;

const TodoCompletionStatusMutation = graphql`
  mutation TodoCompletionStatusMutation($id: String!, $completed: Boolean!) {
    edit(id: $id, input: { completed: $completed }) {
      id
      completed
    }
  }
`;

const TodoTitleMutation = graphql`
  mutation TodoTitleMutation($id: String!, $title: String!) {
    edit(id: $id, input: { title: $title }) {
      id
      title
    }
  }
`;

function Todo({ todo, refresh }) {
  const [isDeleteInFocus, setIsDeleteInFocus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const [commitDeleteTodoMutation, isDeleteTodoMutationInFlight] =
    useMutation(TodoDeleteMutation);

  const [commitCompletionStatusMutation, isCompletionStatusMutationInFlight] =
    useMutation(TodoCompletionStatusMutation);

  const [commitTitleMutation, isTitleMutationInFlight] =
    useMutation(TodoTitleMutation);

  function handleDeleteFocus(value) {
    setIsDeleteInFocus(() => value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      commitTitleMutation({
        variables: { id: todo.id, title: text },
      });
      setIsEditing((_) => false);
    } else if (event.key === "Escape") {
      setText((_) => todo.title);
      setIsEditing((_) => false);
    } else {
      setText((_) => event.target.value);
    }
  }

  return (
    <div className={`${isDeleteInFocus ? "focused" : null}  todoWrapper`}>
      <Checkbox
        icon={<CircleUnchecked />}
        checkedIcon={<CircleCheckedFilled />}
        sx={{ paddingTop: 0, paddingLeft: 0 }}
        onClick={(_) =>
          commitCompletionStatusMutation({
            variables: { id: todo.id, completed: !todo.completed },
          })
        }
        checked={todo.completed}
      />
      <div>
        {!isEditing && (
          <div
            className={`${todo.completed ? "completed" : null} title`}
            onClick={() =>
              setIsEditing((_) => {
                return true;
              })
            }
          >
            {todo.title.length > 30
              ? todo.title.substring(0, 30) + "..."
              : todo.title}
          </div>
        )}
        {isEditing && (
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { fontSize: 20 },
            }}
            onKeyDown={handleKeyDown}
            inputRef={(input) => input && input.focus()}
            defaultValue={text}
            onBlur={() => setIsEditing(() => false)}
          >
            {text}
          </TextField>
        )}
        <ExpirationDate date={todo.date} />
      </div>
      <div className="deleteButton">
        <IconButton
          aria-label="delete"
          onMouseOver={() => handleDeleteFocus(true)}
          onMouseOut={() => handleDeleteFocus(false)}
          onClick={(_) =>
            commitDeleteTodoMutation({
              variables: { id: todo.id },
              onCompleted: () => {
                refresh();
              },
            })
          }
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Todo;
