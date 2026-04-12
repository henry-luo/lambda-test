

/*---
info: |
    When "instanceof" returns true it means that
    GetValue(RelationalExpression) is constructed with ShiftExpression
es5id: 11.8.6_A7_T3
description: Checking Function object
---*/

var __func = new Function;


if (!(__func instanceof Function)) {
	throw new Test262Error('#1: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}


if (__func.constructor !== Function) {
	throw new Test262Error('#2: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}
