

/*---
info: |
    0, null, undefined, false, empty string, NaN in expression is evaluated
    to false
es5id: 12.5_A1.1_T1
description: Using "if" without "else" construction
---*/


if(0)
	throw new Test262Error('#1: 0 in expression is evaluated to false ');


if(false)
    throw new Test262Error('#2: false in expression is evaluated to false ');


if(null)
	throw new Test262Error('#3: null in expression is evaluated to false ');


if(undefined)
	throw new Test262Error('#4: undefined in expression is evaluated to false ');


if("")
    throw new Test262Error('#5: empty string in expression is evaluated to false ');


if(NaN)
    throw new Test262Error('#5: NaN in expression is evaluated to false ');

