

/*---
es5id: 10.4.3-1-25-s
description: >
    Strict Mode - checking 'this' (New'ed object from Anonymous
    FunctionExpression defined within strict mode)
flags: [onlyStrict]
---*/

var obj = new (function () {
    return this;
});

assert.notSameValue(obj, this, 'obj');
assert.notSameValue((typeof obj), "undefined", '(typeof obj)');
