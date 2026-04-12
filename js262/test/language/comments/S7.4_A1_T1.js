

/*---
info: Correct interpretation of single line comments
es5id: 7.4_A1_T1
description: Create comments with any code
---*/


var x = 0;
assert.sameValue(x, 0, 'The value of `x` is 0');


var 
y;
assert.sameValue(y, undefined, 'The value of `y` is expected to equal `undefined`');


this.y++;
assert.sameValue(isNaN(y), true, 'isNaN(y) returns true');
