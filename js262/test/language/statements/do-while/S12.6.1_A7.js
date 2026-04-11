

/*---
info: |
    The "do-while" Statement is evaluted according to 12.6.1 and returns
    (normal, V, empty)
es5id: 12.6.1_A7
description: Using eval
---*/

var __evaluated;
var __condition=0

__evaluated = eval("do eval(\"__condition++\"); while (__condition<5)");


if (__condition !== 5) {
	throw new Test262Error('#1: The "do-while" statement is evaluted according to the Standard ');
}


if (__evaluated !== 4) {
	throw new Test262Error('#2: The "do-while" statement returns (normal, V, empty)');
}

