

/*---
es5id: 10.4.3-1-14-s
description: >
    Strict Mode - checking 'this' (Function constructor includes
    strict directive prologue)
flags: [noStrict]
---*/

var f = Function("\"use strict\";\nreturn typeof this;");

assert.sameValue(f(), "undefined", 'f()');
