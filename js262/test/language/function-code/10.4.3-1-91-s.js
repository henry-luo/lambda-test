

/*---
es5id: 10.4.3-1-91-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.call(null))
flags: [noStrict]
---*/

var global = this;
function f() { return this===global;};
assert((function () {"use strict"; return f.call(null); })());
