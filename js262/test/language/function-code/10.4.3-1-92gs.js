

/*---
es5id: 10.4.3-1-92gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function.prototype.call(undefined))
flags: [noStrict]
---*/

var global = this;
function f() { return this===global;};
if (! ((function () {"use strict"; return f.call(undefined);})())){
    throw "'this' had incorrect value!";
}
