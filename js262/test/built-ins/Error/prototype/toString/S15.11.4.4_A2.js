

/*---
info: The Error.prototype.toString returns an implementation defined string
es5id: 15.11.4.4_A2
description: Checking if call of Error.prototype.toString() fails
---*/

assert.notSameValue(new Error("Error").toString(), undefined, 'The value of toStr is expected to not equal ``undefined``');
