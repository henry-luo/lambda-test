

/*---
info: "''arguments'' variable overrides ActivationObject.arguments"
es5id: 13_A15_T4
description: >
    Declaring a variable named with "arguments" and following a
    "return" statement within a function body
flags: [noStrict]
---*/

THE_ANSWER="Answer to Life, the Universe, and Everything";

function __func(){
    return typeof arguments;
    var arguments = THE_ANSWER;
};


if (__func(42,42,42) !== "object") {
	throw new Test262Error('#1: __func(42,42,42) === "object". Actual: __func(42,42,42)==='+__func(42,42,42));
}

