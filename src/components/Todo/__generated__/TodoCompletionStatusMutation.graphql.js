/**
 * @generated SignedSource<<c3bdb7c514ca26ea651409202a2a907b>>
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
    "cacheID": "3e42d33b823c0495989b0e685aa6a4f0",
    "id": null,
    "metadata": {},
    "name": "TodoCompletionStatusMutation",
    "operationKind": "mutation",
    "text": "mutation TodoCompletionStatusMutation(\n  $id: String!\n  $completed: Boolean!\n) {\n  edit(id: $id, input: {completed: $completed}) {\n    id\n    completed\n  }\n}\n"
  }
};
})();

node.hash = "a679f10de8fa0b6e9bf367877fafa24e";

module.exports = node;
