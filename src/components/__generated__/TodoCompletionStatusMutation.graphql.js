/**
 * @generated SignedSource<<45616129a546a78e2d788db49852c328>>
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
    "cacheID": "32f3f369a3aa37b5e39555d015337d09",
    "id": null,
    "metadata": {},
    "name": "TodoCompletionStatusMutation",
    "operationKind": "mutation",
    "text": "mutation TodoCompletionStatusMutation(\n  $id: String!\n  $completed: Boolean\n) {\n  edit(id: $id, input: {completed: $completed}) {\n    id\n    completed\n  }\n}\n"
  }
};
})();

node.hash = "57f9352601a503d2dc8f66c58cfb201d";

module.exports = node;
