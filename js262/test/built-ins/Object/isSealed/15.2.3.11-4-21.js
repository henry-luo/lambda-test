

/*---
es5id: 15.2.3.11-4-21
description: Object.isSealed returns false for all built-in objects (EvalError)
---*/

var b = Object.isSealed(EvalError);

assert.sameValue(b, false, 'b');
