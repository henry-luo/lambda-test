

/*---
es6id: 14.2
description: >
    Expression Body implicit return
---*/
var plusOne = v => v + 1;
assert.sameValue(plusOne(1), 2);
