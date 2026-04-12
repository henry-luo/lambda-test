

/*---
es5id: 10.4.3-1-88-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.apply(someObject))
flags: [noStrict]
---*/

var o = {};
function f() { return this===o;};
assert((function () {"use strict"; return f.apply(o);})());
