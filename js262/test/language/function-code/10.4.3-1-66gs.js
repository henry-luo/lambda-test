

/*---
es5id: 10.4.3-1-66gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.apply())
---*/

function f() { "use strict"; return this===undefined;};
if (! f.apply()){
    throw "'this' had incorrect value!";
}
