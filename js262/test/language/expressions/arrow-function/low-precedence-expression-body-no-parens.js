

/*---
es6id: 14.2
description: >
    No need for parentheses even for lower-precedence expression body
---*/

var square = x => x * x;
assert.sameValue(square(3), 9);
