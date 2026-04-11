

/*---
es5id: 10.4.3-1-89gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict
    Function.prototype.apply(globalObject))
flags: [noStrict]
---*/

var global = this;
function f() { return this;};
if ((function () {"use strict"; return f.apply(global);})() !== global){
    throw "'this' had incorrect value!";
}
