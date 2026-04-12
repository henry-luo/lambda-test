

/*---
info: function must be evaluated inside the expression
es5id: 13_A2_T3
description: >
    Defining function body with "return arguments[0] +"-"+
    arguments[1]"
---*/

var x = (function __func(){return arguments[0] +"-"+ arguments[1]})("Obi","Wan");


if (x !== "Obi-Wan") {
	throw new Test262Error('#1: x === "Obi-Wan". Actual: x ==='+x);
}


if (typeof __func !== 'undefined') {
	throw new Test262Error('#2: typeof __func === \'undefined\'. Actual: typeof __func ==='+typeof __func);
}

