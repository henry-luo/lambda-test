

/*---
es5id: 10.4.3-1-73gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.call(undefined))
---*/

function f() { "use strict"; return this===undefined;};
if (! f.call(undefined)){
    throw "'this' had incorrect value!";
}
