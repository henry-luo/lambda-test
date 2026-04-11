

/*---
esid: sec-symbol.species
description: Value shared by all realms
info: |
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [cross-realm, Symbol.species]
---*/

var OSymbol = $262.createRealm().global.Symbol;

assert.sameValue(Symbol.species, OSymbol.species);
