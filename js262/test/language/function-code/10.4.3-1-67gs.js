

/*---
es5id: 10.4.3-1-67gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.apply(null))
---*/

function f() { "use strict"; return this===null;};
if (! f.apply(null)){
    throw "'this' had incorrect value!";
}
