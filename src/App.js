import "./App.css";
import React, { useState, Suspense, useCallback } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { usePreloadedQuery, useQueryLoader } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import InstrumentsPanel from "./components/InstrumentsPanel/InstrumentsPanel";
import { ErrorBoundary } from "react-error-boundary";

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

function App({ preloadedQuery }) {
  const [isPending, setIsPending] = useState(false);

  const [queryRef, loadQueryRef] = useQueryLoader(
    AllTodosQuery,
    preloadedQuery
  );

  const { todos } = usePreloadedQuery(AllTodosQuery, queryRef);

  const refresh = useCallback(() => {
    loadQueryRef(null, { fetchPolicy: "network-only" });
  }, [loadQueryRef]);

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

function AppWrapper({ preloadedQuery }) {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div style={{ color: "red" }}>{error.message}</div>
      )}
    >
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default AppWrapper;
