const Database = require("./database");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

const port = process.env.PORT;

const db = new Database();

for (let i = 0; i < 5; i++) {
  db.addTodo({ title: i, date: Date.now(), completed: false });
}

const schema = buildSchema(`
  type Todo {
    id: String!
    title: String!
    date: Float!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
    todo(id: String!): Todo
  }

  input TodoInput {
    title: String
    date: Float
    completed: Boolean
  }

  type Mutation {
    add(input: TodoInput): Todo
    edit(id: String!, input: TodoInput): Todo
    delete(id: String!): Boolean
  }  
`);

const root = {
  todos: () => db.findAll(),
  todo: ({ id }) => db.findById(id),
  add: ({ input }) => db.addTodo(input),
  edit: ({ id, input }) => db.editById(id, input),
  delete: ({ id }) => db.deleteById(id),
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
