

/*---
info: |
    When Function object(F) is constructed
    the [[Prototype]] property of F is set to the original Function prototype object as specified in 15.3.3.1
es5id: 13.2_A5
description: Function.prototype.isPrototypeOf() is used
---*/

function __func(){};


if (!(Function.prototype.isPrototypeOf(__func))) {
	throw new Test262Error('#1: Function.prototype.isPrototypeOf(__func)');
}


var __gunc = function(){};


if (!(Function.prototype.isPrototypeOf(__gunc))) {
	throw new Test262Error('#1: Function.prototype.isPrototypeOf(__gunc)');
}

