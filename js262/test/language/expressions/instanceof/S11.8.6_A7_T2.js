

/*---
info: |
    When "instanceof" returns true it means that
    GetValue(RelationalExpression) is constructed with ShiftExpression
es5id: 11.8.6_A7_T2
description: Checking Array object
---*/

var __arr=[];


if (!(__arr instanceof Array)) {
	throw new Test262Error('#1: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}


if (__arr.constructor !== Array) {
	throw new Test262Error('#2: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}
