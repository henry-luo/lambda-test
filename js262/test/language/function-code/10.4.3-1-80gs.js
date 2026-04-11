

/*---
es5id: 10.4.3-1-80gs
description: >
    Strict - checking 'this' from a global scope (strict function
    declaration called by Function.prototype.bind(globalObject)())
flags: [noStrict]
---*/

function f() { "use strict"; return this;};
if (f.bind(this)() !== this){
    throw "'this' had incorrect value!";
}
