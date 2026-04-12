

/*---
description: >
    Generators declared with GeneratorExpression syntax do not require a
    `yield` expression.
es6id: 14.4
features: [generators]
---*/

var result;
var foo = function*(a) {};

result = foo(3).next();

assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
