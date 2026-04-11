

/*---
es5id: 10.4.3-1-72gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.call(null))
---*/

function f() { "use strict"; return this===null;};
if (! f.call(null)){
    throw "'this' had incorrect value!";
}
