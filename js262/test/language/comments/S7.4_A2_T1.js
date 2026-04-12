

/*---
info: Correct interpretation of multi line comments
es5id: 7.4_A2_T1
description: Create comments with any code
---*/


var x = 0;

assert.sameValue(x, 0, 'The value of `x` is 0');


var 
y;
assert.sameValue(y, undefined, 'The value of `y` is expected to equal `undefined`');


var  y;
assert.sameValue(y, undefined, 'The value of `y` is expected to equal `undefined`');


this.y++;
assert.sameValue(isNaN(y), true, 'isNaN(y) returns true');


var string = "/*var y = 0*/"  
assert.sameValue(string, "/*var y = 0*/", 'The value of `string` is "/*var y = 0*/"');


var string = "/*var y = 0"  
assert.sameValue(string, "/*var y = 0", 'The value of `string` is "/*var y = 0"');

