

/*---
info: Unicode symbols in function name are allowed
es5id: 13_A14
description: Defining function name with unicode symbols
flags: [noStrict]
---*/

eval("function __func\u0041(__arg){return __arg;};");


if (typeof __funcA !== "function") {
	throw new Test262Error('#1: unicode symbols in function name are allowed');
}

