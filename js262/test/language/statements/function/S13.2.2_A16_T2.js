

/*---
info: FunctionExpression within a new statement is admitted
es5id: 13.2.2_A16_T2
description: >
    Using "var __obj = new function __func(arg){this.prop=arg;}(5)" as
    FunctionExpression
---*/


if (typeof __func !== "undefined") {
	throw new Test262Error('#1: typeof __func === "undefined". Actual: typeof __func ==='+typeof __func);
}


var __obj = new function __func(arg){this.prop=arg;}(5);


if (__obj.prop !== 5) {
	throw new Test262Error('#2: __obj.prop === 5. Actual: __obj.prop ==='+__obj.prop);
}


if (typeof __func !== "undefined") {
	throw new Test262Error('#3: typeof __func === "undefined". Actual: typeof __func ==='+typeof __func);
}

