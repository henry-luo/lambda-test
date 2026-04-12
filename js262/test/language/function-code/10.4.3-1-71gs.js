

/*---
es5id: 10.4.3-1-71gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.call())
---*/

function f() { "use strict"; return this===undefined;};
if (! f.call()){
    throw "'this' had incorrect value!";
}
