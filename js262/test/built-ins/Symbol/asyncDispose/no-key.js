

/*---
esid: sec-symbol.asyncdispose
description: Well-known symbols do not have a key in the global registry
features: [cross-realm, explicit-resource-management]
---*/

assert.sameValue(Symbol.keyFor(Symbol.asyncDispose), undefined);
