/**
 * @generated SignedSource<<04e18609aaef87d7cdb8166d76976552>>
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
    "cacheID": "5204cccc159edc944e63302eb34777f3",
    "id": null,
    "metadata": {},
    "name": "TodoTitleMutation",
    "operationKind": "mutation",
    "text": "mutation TodoTitleMutation(\n  $id: ID!\n  $title: String!\n) {\n  edit(id: $id, input: {title: $title}) {\n    id\n    title\n  }\n}\n"
  }
};
})();

node.hash = "baa65b844420d04ab3547c4b3dc361c5";

module.exports = node;
