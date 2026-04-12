

/*---
info: |
    Function call cannot appear in the program before the FunctionExpression
    appears
es5id: 13_A17_T2
description: >
    Trying to call a function before the FunctionExpression appears
    and then using the FunctionExpression one more time
---*/


try{
    var __result = __func();
	throw new Test262Error("#1: var __result = __func() lead to throwing exception");
} catch(e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: func should throw a TypeError  Actual: ' + (e));  
  }
}


var __func = function __func(){return "ONE";};


var __result = __func();
if (__result !== "ONE") {
	throw new Test262Error('#2: __result === "ONE". Actual: __result ==='+__result);
}


__func = function __func(){return "TWO";};


var __result = __func();
if (__result !== "TWO") {
	throw new Test262Error('#3: __result === "TWO". Actual: __result ==='+__result);
}

