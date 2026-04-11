

/*---
es5id: 10.4.3-1-89-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.apply(globalObject))
flags: [noStrict]
---*/

var global = this;
function f() { return this;};
assert.sameValue((function () {"use strict"; return f.apply(global); })(), global);
