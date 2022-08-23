/**
 * @generated SignedSource<<6cd950d94dce40d2e2537295f2127586>>
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
      }
    ],
    "kind": "ScalarField",
    "name": "delete",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a242910b1cadc0339872bc3fa9c24f71",
    "id": null,
    "metadata": {},
    "name": "TodoDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoDeleteMutation(\n  $id: String!\n) {\n  delete(id: $id)\n}\n"
  }
};
})();

node.hash = "9f0a013c7de1acdc66d5c7b980b795bf";

module.exports = node;
