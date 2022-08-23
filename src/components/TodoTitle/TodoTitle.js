import React, { useState, useCallback } from "react";
import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import "./TodoTitle.css";

const TodoTitleMutation = graphql`
  mutation TodoTitleMutation($id: String!, $title: String!) {
    edit(id: $id, input: { title: $title }) {
      id
      title
    }
  }
`;

function TodoTitle({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const [commitTitleMutation] = useMutation(TodoTitleMutation);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (text !== "" && text !== todo.title) {
        commitTitleMutation({
          variables: { id: todo.id, title: text },
        });
      } else setText(todo.title);
    } else if (event.key === "Escape") {
      setText(todo.title);
      setIsEditing(false);
    }
  }

  const inputRef = useCallback((el) => {
    if (el != null) {
      el.focus();
      el.select();
    }
  }, []);

  return (
    <>
      {!isEditing && (
        // длинные названия для красоты обрезаются
        <div
          className={`${todo.completed ? "completed " : ""}title`}
          onClick={() => {
            setIsEditing(true);
          }}
        >
          {todo.title.length > 30
            ? todo.title.substring(0, 30) + "..."
            : todo.title}
        </div>
      )}
      {isEditing && (
        <input
          className="edit"
          onBlur={() => setIsEditing(false)}
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={inputRef}
        />
      )}
    </>
  );
}

export default TodoTitle;
