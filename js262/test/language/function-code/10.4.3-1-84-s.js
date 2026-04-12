

/*---
es5id: 10.4.3-1-84-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict new'ed Function constructor)
flags: [noStrict]
---*/

this.f = function()  { return this!==undefined;};
assert((function () {return new Function("\"use strict\";return f();")();})());
