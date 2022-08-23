/**
 * @generated SignedSource<<354b855651be7093c6cc5f8e29841b46>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "completed"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "completed",
            "variableName": "completed"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "editTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoCompletionStatusMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoCompletionStatusMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "38ada6f2caae2d36e77a609a64a4abd8",
    "id": null,
    "metadata": {},
    "name": "TodoCompletionStatusMutation",
    "operationKind": "mutation",
    "text": "mutation TodoCompletionStatusMutation(\n  $id: ID!\n  $completed: Boolean!\n) {\n  editTodo(id: $id, input: {completed: $completed}) {\n    id\n    completed\n  }\n}\n"
  }
};
})();

node.hash = "8b1bfb2d617f27ccc56ea1abb66132b2";

module.exports = node;
