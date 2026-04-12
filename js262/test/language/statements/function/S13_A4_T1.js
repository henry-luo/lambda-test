

/*---
info: |
    The production FunctionDeclaration: "function Identifier (
    FormalParameterList_opt ) { FunctionBody }" is processed by function
    declarations
es5id: 13_A4_T1
description: Declaring a function that returns string
---*/

function __func(){return "zig-zig-sputnik";};


if (typeof __func !== "function") {
	throw new Test262Error('#1: typeof __func === "function". Actual: typeof __func ==='+typeof __func);
}


if (__func() !== "zig-zig-sputnik") {
	throw new Test262Error('#2: __func() === "zig-zig-sputnik". Actual: __func() ==='+__func());
}

