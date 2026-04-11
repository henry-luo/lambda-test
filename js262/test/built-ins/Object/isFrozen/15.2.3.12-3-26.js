

/*---
es5id: 15.2.3.12-3-26
description: Object.isFrozen returns false for all built-in objects (URIError)
---*/

var b = Object.isFrozen(URIError);

assert.sameValue(b, false, 'b');
