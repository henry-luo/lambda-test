

/*---
es5id: 10.4.3-1-16-s
description: >
    Strict Mode - checking 'this' (New'ed Function constructor
    includes strict directive prologue)
flags: [noStrict]
---*/

var f = new Function("\"use strict\";\nreturn typeof this;");

assert.sameValue(f(), "undefined", 'f()');
