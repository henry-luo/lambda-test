

/*---
info: |
    The "while" Statement is evaluted according to 12.6.2 and returns
    (normal, V, empty)
es5id: 12.6.2_A7
description: using eval
---*/

var __evaluated;
var __condition=0

__evaluated = eval("while (__condition<5) eval(\"__condition++\");");


if (__condition !== 5) {
	throw new Test262Error('#1: The "while" statement is evaluated as described in the Standard');
}


if (__evaluated !== 4) {
	throw new Test262Error('#2: The "while" statement returns (normal, V, empty)');
}

