

/*---
es6id: 14.2
description: >
    Parenthesize the body to return an object literal expression
---*/

var keyMaker = val => ({ key: val });
assert.sameValue(keyMaker(1).key, 1);
