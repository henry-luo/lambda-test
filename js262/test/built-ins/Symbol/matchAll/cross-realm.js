

/*---
esid: pending
description: Value shared by all realms
info: |
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [cross-realm, Symbol.matchAll]
---*/

var OSymbol = $262.createRealm().global.Symbol;

assert.sameValue(Symbol.matchAll, OSymbol.matchAll);
