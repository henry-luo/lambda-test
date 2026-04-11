

/*---
info: |
    "x=function y(){}" statement does not store a reference to the new
    function in the varaible y(Identifier)
es5id: 13_A1
description: Checking the type of y
---*/

var __func = function __exp__func(){return 0;};


if (typeof __func !== "function") {
	throw new Test262Error('#1: typeof __func === "function". Actual: typeof __func ==='+typeof __func);
}


if (typeof __exp__func !== "undefined"){
    throw new Test262Error('#2: typeof __exp__func === "undefined". Actual: typeof __exp__func ==='+typeof __exp__func);
}

