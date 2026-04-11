

/*---
info: |
    When the [[Call]] property for a Function object is called,
    the body is evaluated and if evaluation result has type "return" its value is not defined, then "undefined" is returned
es5id: 13.2.1_A9_T2
description: >
    Using "return" with no expression. Declaring a function with "var
    __func = function()"
---*/

var x; 

var __func = function(){
    x = 1;
    return;
}


if (__func() !== undefined) {
	throw new Test262Error('#1: __func() === undefined. Actual: __func() ==='+__func());
};


if (x!==1) {
	throw new Test262Error('#2: x === 1. Actual: x === '+x);
}

