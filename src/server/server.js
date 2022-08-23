const Database = require("./database");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

const port = process.env.PORT;

const db = new Database();

for (let i = 0; i < 5; i++) {
  db.add({ title: i, date: Date.now(), completed: false });
}

const schema = buildSchema(`
  type Todo {
    id: ID!
    title: String!
    date: Float!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  input TodoInput {
    title: String
    date: Float
    completed: Boolean
  }

  type Mutation {
    addTodo(input: TodoInput): Todo
    editTodo(id: ID!, input: TodoInput): Todo
    deleteTodo(id: ID!): Boolean
  }  
`);

const root = {
  todos: () => db.findAll(),
  todo: ({ id }) => db.findById(id),
  addTodo: ({ input }) => db.add({ ...input, completed: false }),
  editTodo: ({ id, input }) => db.editById(id, input),
  deleteTodo: ({ id }) => db.deleteById(id),
};

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port);

console.log(
  `Running a GraphQL API server at http://localhost:${port}/graphql.`
);
