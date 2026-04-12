

/*---
info: In the "if" Statement eval in Expression is admitted
es5id: 12.5_A2
description: Checking by using eval "eval("true")"
---*/

if (eval("true")) {
} else {
    throw new Test262Error('#1: In the "if" Statement eval as Expression is admitted'); 
}
