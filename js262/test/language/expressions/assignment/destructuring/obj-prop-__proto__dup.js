

/*---
esid: sec-destructuring-assignment
es6id: 12.14.5
description: Duplicate __proto__ property names
info: |
    Annex B defines an early error for duplicate PropertyName of `__proto__`,
    in object initializers, but this does not apply to Object Assignment
    patterns
---*/


var value = Object.defineProperty({}, '__proto__', { value: 123 });
var result, x, y;

result = { __proto__: x, __proto__: y } = value;

assert.sameValue(result, value);
assert.sameValue(x, 123, 'first AssignmentProperty');
assert.sameValue(y, 123, 'second AssignmentProperty');

result = x = y = null;


result = ({ __proto__: x, __proto__: y } = value);

assert.sameValue(result, value);
assert.sameValue(x, 123, 'first AssignmentProperty (CPEAAPL)');
assert.sameValue(y, 123, 'second AssignmentProperty (CPEAAPL)');
