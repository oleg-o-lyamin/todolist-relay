import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

import fetchGraphQL from "./server/fetchGraphQL";
import RelayEnvironment from "./RelayEnvironment";
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader,
  loadQuery,
} from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

const AllTodosQuery = graphql`
  query AppAllTodosQuery {
    todos {
      id
      title
      date
      completed
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AllTodosQuery);

function App() {
  // const [todos, setTodos] = useState([]);
  function setTodos() {}

  const [queryRef, loadQueryRef] = useQueryLoader(
    AllTodosQuery,
    preloadedQuery
  );

  const { todos } = usePreloadedQuery(AllTodosQuery, queryRef);

  const refresh = () => {
    loadQueryRef(null, { fetchPolicy: "network-only" });
  };

  function handleSwitchChange(isChecked) {
    fetchGraphQL("{ todos { id title date completed } }").then((data) => {
      let array = data.data.all;
      if (!isChecked) array = array.filter((todo) => todo.completed === false);

      setTodos(() => array);
    });
  }

  return (
    <div className="appWrapper">
      <header className="appHeader">
        <h1>Todo list</h1>
      </header>
      <div className="wrapper">
        <AddTodoForm refresh={refresh} />
      </div>
      <div className="wrapper">
        <TodoList todos={todos} refresh={refresh} />
      </div>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
