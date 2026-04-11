

/*---
es5id: 10.4.3-1-82-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict eval)
flags: [noStrict]
---*/

function f() { return this!==undefined;};
assert((function () {"use strict"; return eval("f();");})());
