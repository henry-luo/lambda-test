

/*---
es5id: 10.4.3-1-76gs
description: >
    checking 'this' from a global scope (strict function declaration called by
    Function.prototype.bind()())
---*/

function f() { "use strict"; return this===undefined;};
if (! (f.bind()())){
    throw "'this' had incorrect value!";
}
