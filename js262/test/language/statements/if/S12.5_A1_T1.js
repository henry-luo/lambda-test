

/*---
info: 1, true, non-empty string in expression is evaluated to true
es5id: 12.5_A1_T1
description: Using "if" without "else" construction
---*/


if(!(1))
	throw new Test262Error('#1: 1 in expression is evaluated to true');


if(!(true))
	throw new Test262Error('#2: true in expression is evaluated to true');


if(!("1"))
	throw new Test262Error('#3: "1" in expression is evaluated to true');


if(!("A"))
	throw new Test262Error('#4: "A" in expression is evaluated to true');

