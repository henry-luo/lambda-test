

/*---
info: FunctionExpression within a new statement is admitted
es5id: 13.2.2_A16_T1
description: >
    Using "is __obj = new function __func(){this.prop=1;}" as
    FunctionExpression
---*/


if (typeof __func !== "undefined") {
	throw new Test262Error('#1: typeof __func === "undefined". Actual: typeof __func ==='+typeof __func);
}


var __obj = new function __func(){this.prop=1;};


if (__obj.prop !== 1) {
	throw new Test262Error('#2: __obj.prop === 1. Actual: __obj.prop ==='+__obj.prop);
}


if (typeof __func !== "undefined") {
	throw new Test262Error('#5: typeof __func === "undefined". Actual: typeof __func ==='+typeof __func);
}

