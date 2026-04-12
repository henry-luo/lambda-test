

/*---
info: Function's scope chain is started when it is declared
es5id: 13.2.2_A19_T2
description: Function is declared in the object scope. Using "with" statement
flags: [noStrict]
---*/

var a = 1;

var __obj = {a:2};

with (__obj)
{
    result = (function(){return a;})();
}


if (result !== 2) {
	throw new Test262Error('#1: result === 2. Actual: result ==='+result);
}

