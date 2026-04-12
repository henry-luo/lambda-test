

/*---
esid: sec-symbol-constructor
description: The Symbol constructor returns a unique value
info: |
    1. If NewTarget is not undefined, throw a TypeError exception.
    2. If description is undefined, let descString be undefined.
    2. Else, let descString be ? ToString(description).
    3. Return a new unique Symbol value whose [[Description]] value is
       descString.
features: [Symbol]
---*/

assert.notSameValue(Symbol(''), Symbol(''), 'empty string');
assert.notSameValue(Symbol(), Symbol(), 'undefined');
assert.notSameValue(Symbol(null), Symbol(null), 'null value');
assert.notSameValue(Symbol('x'), Symbol('x'), 'string "x"');
