

/*---
es5id: 10.4.3-1-65gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    non-strict new'ed Function constructor)
---*/

function f() { "use strict"; return this===undefined;};
if (! ( (new Function("return f();")) () )){
    throw "'this' had incorrect value!";
}
