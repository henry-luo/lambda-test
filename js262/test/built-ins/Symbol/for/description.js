

/*---
esid: sec-symbol.for
description: Assigns the string value to the [[Description]] slot
info: |
    1. Let stringKey be ? ToString(key).
    [...]
    4. Let newSymbol be a new unique Symbol value whose [[Description]] value
       is stringKey.
    [...]
    6. Return newSymbol.
features: [Symbol, Symbol.prototype.description]
---*/

var symbol = Symbol.for({toString: function() { return 'test262'; }});

assert.sameValue(symbol.description, 'test262');
