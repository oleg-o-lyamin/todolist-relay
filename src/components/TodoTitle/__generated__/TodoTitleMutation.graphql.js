/**
 * @generated SignedSource<<a82c435a834d2e7c7bcda96f86129751>>
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
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
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
            "name": "title",
            "variableName": "title"
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
        "name": "title",
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
    "name": "TodoTitleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoTitleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4cb2fc55c0445d0fd650777de2a37cb5",
    "id": null,
    "metadata": {},
    "name": "TodoTitleMutation",
    "operationKind": "mutation",
    "text": "mutation TodoTitleMutation(\n  $id: ID!\n  $title: String!\n) {\n  editTodo(id: $id, input: {title: $title}) {\n    id\n    title\n  }\n}\n"
  }
};
})();

node.hash = "e5be58536cd81d031df4eba2bddcd0ad";

module.exports = node;
