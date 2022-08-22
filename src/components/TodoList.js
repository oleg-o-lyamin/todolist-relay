import React, { useState } from "react";
import Todo from "./Todo";
import InstrumentsPanel from "./InstrumentsPanel";

function TodoList(props) {
  const [isChecked, setIsChecked] = useState(false);

  const todos = props.todos
    .filter((todo) => !isChecked || !todo.completed)
    .map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onDelete={props.onDelete}
        refresh={props.refresh}
      />
    ));

  return (
    <div style={{ width: "100%" }}>
      <InstrumentsPanel
        onChange={(_) => {
          setIsChecked((prev) => !prev);
        }}
      />
      {todos.length > 0 ? (
        todos
      ) : (
        <div className="noTodosWrapper">
          <h2>Nothing to display</h2>
        </div>
      )}
    </div>
  );
}

export default TodoList;
