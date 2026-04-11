

/*---
info: A "prototype" property is automatically created for every function
es5id: 13.2_A1_T2
description: Using "var __func = function(){}" as a FunctionDeclaration
---*/

var __func = function(){};


if (__func.prototype === undefined) {
	throw new Test262Error('#1: __func.prototype !== undefined');
}

