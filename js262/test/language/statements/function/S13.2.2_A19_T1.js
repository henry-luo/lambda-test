

/*---
info: Function's scope chain is started when it is declared
es5id: 13.2.2_A19_T1
description: Function is declared in the global scope
flags: [noStrict]
---*/

var a = 1;

var __func= function(){return a;};

var __obj = {a:2};

with (__obj)
{
    result = __func();
}


if (result !== 1) {
	throw new Test262Error('#1: result === 1. Actual: result ==='+result);
}

