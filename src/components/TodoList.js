import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  const todos = props.todos
    .filter((todo) => !props.isPending || !todo.completed)
    .map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onDelete={props.onDelete}
        refresh={props.refresh}
      />
    ));

  return (
    <div>
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
