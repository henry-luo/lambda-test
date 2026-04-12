

/*---
info: |
    When "instanceof" returns true it means that
    GetValue(RelationalExpression) is constructed with ShiftExpression
es5id: 11.8.6_A7_T1
description: Checking Object object
---*/

var __obj={};


if (!(__obj instanceof Object)) {
	throw new Test262Error('#1: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}


if (__obj.constructor !== Object) {
	throw new Test262Error('#2: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}
