

/*---
es5id: 10.4.3-1-55gs
description: >
    Strict - checking 'this' from a global scope (Literal getter
    includes strict directive prologue)
---*/

var o = { get foo() { "use strict"; return this; } }
if (o.foo!==o) {
    throw "'this' had incorrect value!";
}
