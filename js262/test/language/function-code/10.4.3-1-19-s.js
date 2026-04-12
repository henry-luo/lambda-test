

/*---
es5id: 10.4.3-1-19-s
description: >
    Strict Mode - checking 'this' (indirect eval used within strict
    mode)
flags: [onlyStrict]
---*/

var global = this;

function testcase() {
var my_eval = eval;
assert.sameValue(my_eval("this"), global, 'my_eval("this")');
}
testcase();
