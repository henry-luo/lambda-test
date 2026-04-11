

/*---
esid: sec-symbol.keyfor
description: Global symbol registry is shared by all realms
info: |
    The GlobalSymbolRegistry is a List that is globally available. It is shared
    by all realms. Prior to the evaluation of any ECMAScript code it is
    initialized as a new empty List.
features: [cross-realm, Symbol]
---*/

var OSymbol = $262.createRealm().global.Symbol;
var parent = Symbol.for('parent');
var child = OSymbol.for('child');

assert.notSameValue(Symbol.keyFor, OSymbol.keyFor);
assert.sameValue(OSymbol.keyFor(parent), 'parent');
assert.sameValue(Symbol.keyFor(child), 'child');
