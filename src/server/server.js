var Database = require("./database");
var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var cors = require("cors");

var db = new Database();

db.addTodo({ title: "123", date: Date.now(), completed: false });
db.addTodo({ title: "456", date: Date.now(), completed: false });

var schema = buildSchema(`
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

var root = {
  todos: () => db.findAll(),
  todo: ({ id }) => db.findById(id),
  add: ({ input }) => db.addTodo(input),
  edit: ({ id, input }) => db.editById(id, input),
  delete: ({ id }) => db.deleteById(id),
};

var corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

var app = express();

app.use(cors(corsOptions));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql.");
