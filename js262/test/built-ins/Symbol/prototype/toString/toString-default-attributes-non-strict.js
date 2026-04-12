

/*---
es6id: 19.4
description: >
    Symbol property get and set, non-strict
flags: [noStrict]
features: [Symbol]
---*/

var sym = Symbol('66');

sym.toString = 0;
assert.sameValue(sym.toString(), 'Symbol(66)', "`sym.toString()` returns `'Symbol(66)'`, after executing `sym.toString = 0;`");

sym.valueOf = 0;
assert.sameValue(sym, sym.valueOf(), "The value of `sym` is `sym.valueOf()`, after executing `sym.valueOf = 0;`");
