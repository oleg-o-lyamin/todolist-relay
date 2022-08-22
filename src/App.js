import "./App.css";
import React, { useState, Suspense } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import RelayEnvironment from "./RelayEnvironment";
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader,
  loadQuery,
} from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import InstrumentsPanel from "./components/InstrumentsPanel";

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
  const [isPending, setIsPending] = useState(false);

  const [queryRef, loadQueryRef] = useQueryLoader(
    AllTodosQuery,
    preloadedQuery
  );

  const { todos } = usePreloadedQuery(AllTodosQuery, queryRef);

  const refresh = () => {
    loadQueryRef(null, { fetchPolicy: "network-only" });
  };

  return (
    <div className="appWrapper">
      <header className="appHeader">
        <h1>Todo list</h1>
      </header>
      <div className="wrapper">
        <AddTodoForm refresh={refresh} />
      </div>
      <div className="wrapper">
        <InstrumentsPanel
          onChange={(pending) => {
            setIsPending((prev) => pending);
          }}
        />
        <TodoList todos={todos} refresh={refresh} isPending={isPending} />
      </div>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
