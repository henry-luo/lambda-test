

/*---
info: If Expression is omitted, the return value is undefined
es5id: 12.9_A3
description: Return without Expression
---*/

var __evaluated;
__evaluated = (function (){return;})();


if (__evaluated !== undefined) {
	throw new Test262Error('#1: If Expression is omitted, the return value is undefined');
}

