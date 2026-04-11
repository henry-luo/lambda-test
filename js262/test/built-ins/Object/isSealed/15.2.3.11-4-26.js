

/*---
es5id: 15.2.3.11-4-26
description: Object.isSealed returns false for all built-in objects (URIError)
---*/

var b = Object.isSealed(URIError);

assert.sameValue(b, false, 'b');
