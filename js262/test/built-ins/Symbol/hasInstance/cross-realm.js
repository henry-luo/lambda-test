

/*---
esid: sec-symbol.hasinstance
description: Value shared by all realms
info: |
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [cross-realm, Symbol.hasInstance]
---*/

var OSymbol = $262.createRealm().global.Symbol;

assert.sameValue(Symbol.hasInstance, OSymbol.hasInstance);
