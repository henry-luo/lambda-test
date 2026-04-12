

/*---
es5id: 10.4.3-1-85-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.apply())
flags: [noStrict]
---*/

function f() { return this!==undefined;};
assert((function () {"use strict"; return f.apply();})());
