

/*---
info: |
    FunctionDeclaration can be overrided by other FunctionDeclaration with
    the same Identifier
es5id: 13_A6_T2
description: Calling a function before it is declared one more time
---*/


try{
    var __result = __func();
} catch(e) {
    throw new Test262Error("#1: Function call can appears in the program before the FunctionDeclaration appears");
}
if (__result !== "SECOND") {
	throw new Test262Error('#1.1: __result === "SECOND". Actual: __result ==='+__result);
}


function __func(){return "FIRST";};


__result = __func();
if (__result !== "SECOND") {
	throw new Test262Error('#2: __result === "SECOND". Actual: __result ==='+__result);
}


function __func(){return "SECOND";};
