

/*---
es5id: 10.4.3-1-68gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.apply(undefined))
---*/

function f() { "use strict"; return this===undefined;};
if (! f.apply(undefined)){
    throw "'this' had incorrect value!";
}
