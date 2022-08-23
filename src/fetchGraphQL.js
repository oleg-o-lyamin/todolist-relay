async function fetchGraphQL(query, variables = null) {
  const port = process.env.REACT_APP_GRAPHQL_SERVER_PORT;

  const response = await fetch(`http://localhost:${port}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
