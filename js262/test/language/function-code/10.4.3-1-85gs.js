

/*---
es5id: 10.4.3-1-85gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function.prototype.apply())
flags: [noStrict]
---*/

function f() { return this!==undefined;};
if (! ((function () {"use strict"; return f.apply();})())){
    throw "'this' had incorrect value!";
}
