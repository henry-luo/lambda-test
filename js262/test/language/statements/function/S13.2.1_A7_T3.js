

/*---
info: |
    When the [[Call]] property for a Function object F is called, the following steps are taken:
    2. Evaluate F's FunctionBody;
    if Result.type is returned  then Result.value is returned too
es5id: 13.2.1_A7_T3
description: Returning number. Declaring a function with "function __func()"
flags: [noStrict]
---*/

function __func(){
    x = 1;
    return x;
}


try {
	x=x;
	throw new Test262Error('#0: "x=x" lead to throwing exception');
} catch (e) {
    if (e instanceof Test262Error) throw e;
}


try{
    var __x=__func();
} catch(e){
    throw new Test262Error('#1: var __x=__func() does not lead to throwing exception. Actual: exception is '+e);
}


if (__x !== 1) {
	throw new Test262Error('#2: __x === 1. Actual: __x ==='+__x);
}


if (x !== 1) {
	throw new Test262Error('#3: x === 1. Actual: x ==='+x);
}

