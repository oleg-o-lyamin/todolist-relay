/**
 * @generated SignedSource<<e50b81b01671b78c936cee1c3e72ca1b>>
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
    "name": "edit",
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
    "cacheID": "cca5e5c5fbd5028a6a22cd5fe8a9ce89",
    "id": null,
    "metadata": {},
    "name": "TodoCompletionStatusMutation",
    "operationKind": "mutation",
    "text": "mutation TodoCompletionStatusMutation(\n  $id: ID!\n  $completed: Boolean!\n) {\n  edit(id: $id, input: {completed: $completed}) {\n    id\n    completed\n  }\n}\n"
  }
};
})();

node.hash = "0d4a147306471563f3ce84a5bc32d59d";

module.exports = node;
