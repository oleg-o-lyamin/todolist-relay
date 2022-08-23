/**
 * @generated SignedSource<<789f12e027c3e4b5a6a67be0fbddd04a>>
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
    "cacheID": "5426459c6ac0bf68376c4137d5d83d7d",
    "id": null,
    "metadata": {},
    "name": "TodoTitleMutation",
    "operationKind": "mutation",
    "text": "mutation TodoTitleMutation(\n  $id: String!\n  $title: String!\n) {\n  edit(id: $id, input: {title: $title}) {\n    id\n    title\n  }\n}\n"
  }
};
})();

node.hash = "c9ae291154c0c9be47771f9b1ef741ac";

module.exports = node;
