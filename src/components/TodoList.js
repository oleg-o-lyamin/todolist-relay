import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div style={{ width: "100%" }}>
      {props.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} onDelete={props.onDelete} />;
      })}
    </div>
  );
}

export default TodoList;
