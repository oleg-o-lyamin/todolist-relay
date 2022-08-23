/**
 * @generated SignedSource<<3d1a845877f52858810029da406d68a6>>
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
    "name": "add",
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
    "cacheID": "a6e567e32a67c0408561b82a02ed9638",
    "id": null,
    "metadata": {},
    "name": "AddTodoFormAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoFormAddTodoMutation(\n  $input: TodoInput\n) {\n  add(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "be844b94753396c442f0578cfae9fa40";

module.exports = node;
