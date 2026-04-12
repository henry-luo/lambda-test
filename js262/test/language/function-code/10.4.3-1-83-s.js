

/*---
es5id: 10.4.3-1-83-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function constructor)
flags: [noStrict]
---*/

this.f = function() {return this!==undefined;};
assert((function () {return Function("\"use strict\";return f();")();})());
