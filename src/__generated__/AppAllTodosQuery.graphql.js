/**
 * @generated SignedSource<<bee1b66fda19d6e34135dd4d53208192>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
    "plural": true,
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllTodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllTodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e65ab1e93d4729e895f12aeca6fc0222",
    "id": null,
    "metadata": {},
    "name": "AppAllTodosQuery",
    "operationKind": "query",
    "text": "query AppAllTodosQuery {\n  todos {\n    id\n    title\n    date\n    completed\n  }\n}\n"
  }
};
})();

node.hash = "91b4076e1c51383eed66a9a821b73c80";

module.exports = node;
