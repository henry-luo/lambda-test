

/*---
es5id: 10.4.3-1-82gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict eval)
flags: [noStrict]
---*/

function f() { return this!==undefined;};
if (! ((function () {"use strict"; return eval("f();");})()) ){
    throw "'this' had incorrect value!";
}
