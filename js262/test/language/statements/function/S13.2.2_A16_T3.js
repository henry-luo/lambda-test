

/*---
info: FunctionExpression within a new statement is admitted
es5id: 13.2.2_A16_T3
description: >
    Using "is __obj = new function __func(arg){this.prop=arg; return
    {feat: ++arg}}(5)" as FunctionExpression
---*/


if (typeof __func !== "undefined") {
	throw new Test262Error('#1: typeof __func === "undefined"');
}


var __obj = new function __func(arg){this.prop=arg; return {feat: ++arg}}(5);


if (__obj.prop !== undefined) {
	throw new Test262Error('#2: __obj.prop === undefined. Actual: __obj.prop ==='+__obj.prop);
}


if (__obj.feat !== 6) {
	throw new Test262Error('#3: __obj.feat === 6. Actual: __obj.feat ==='+__obj.feat);
}


if (typeof __func !== "undefined") {
	throw new Test262Error('#4: typeof __func === "undefined". Actual: typeof __func ==='+typeof __func);
}

