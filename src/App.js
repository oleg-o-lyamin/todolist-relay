import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import InstrumentsPanel from "./components/InstrumentsPanel";
import fetchGraphQL from "./server/fetchGraphQL";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchGraphQL("{ all { id title date completed } }").then((data) =>
      setTodos(() => data.data.all)
    );
  }, []);

  function handleAddTodo(todo) {
    fetchGraphQL(
      `mutation add($input: TodoInput) {
       add(input: $input) {
        id
        title
        date
        completed
      }
    }`,
      { input: { ...todo } }
    ).then((data) => {
      setTodos((prevTodos) => [...prevTodos, data.data.add]);
    });
  }

  function handleSwitchChange(isChecked) {
    fetchGraphQL("{ all { id title date completed } }").then((data) => {
      let array = data.data.all;
      if (!isChecked) array = array.filter((todo) => todo.completed === false);

      setTodos(() => array);
    });
  }

  function handleDelete(id) {
    fetchGraphQL(
      `mutation delete($id: String!) {
        delete(id: $id)
    }`,
      { id }
    ).then((data) => {
      setTodos((prevTodos) => {
        const index = prevTodos.findIndex((todo) => todo.id === id);
        return [...prevTodos.slice(0, index), ...prevTodos.slice(index + 1)];
      });
    });
  }

  return (
    <div className="appWrapper">
      <header className="appHeader">
        <h1>Todo list</h1>
      </header>
      <InstrumentsPanel
        onChange={(isChecked) => handleSwitchChange(isChecked)}
      />
      <div className="main">
        <TodoList todos={todos} onDelete={({ id }) => handleDelete(id)} />
        <AddTodoForm onAdd={(todo) => handleAddTodo(todo)} />
      </div>
    </div>
  );
}

export default App;
