

/*---
info: "''arguments'' variable overrides ActivationObject.arguments"
es5id: 13_A15_T5
description: Creating a variable named with "arguments" without a function
flags: [noStrict]
---*/

THE_ANSWER="Answer to Life, the Universe, and Everything";

var arguments = THE_ANSWER;

function __func(){
    return arguments;
};


if ( __func() === THE_ANSWER) {
	throw new Test262Error('#1: __func() !== THE_ANSWER');
}


if (__func("The Ultimate Question") === "The Ultimate Question") {
	throw new Test262Error('#2: __func("The Ultimate Question") !== "The Ultimate Question"');
}

