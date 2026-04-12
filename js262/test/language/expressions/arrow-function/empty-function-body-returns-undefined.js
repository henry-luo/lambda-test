

/*---
es6id: 14.2
description: >
    Empty arrow function returns undefined
---*/

var empty = () => {};
assert.sameValue(empty(), undefined);
