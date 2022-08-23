/**
 * @generated SignedSource<<ce82eb57037cc520a2fec438e58bac7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "addTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodoFormAddTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddTodoFormAddTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1589b5798907c990dafee23f1c41b5bd",
    "id": null,
    "metadata": {},
    "name": "AddTodoFormAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoFormAddTodoMutation(\n  $input: TodoInput\n) {\n  addTodo(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "381385759bfd23282a3341b5751208d8";

module.exports = node;
