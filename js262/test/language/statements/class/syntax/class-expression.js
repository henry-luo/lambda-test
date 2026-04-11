

/*---
es6id: 14.5
description: >
    ClassExpression
---*/
var A = class {}

assert.sameValue(typeof A, "function");
