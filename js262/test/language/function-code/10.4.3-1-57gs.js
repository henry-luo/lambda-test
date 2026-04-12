

/*---
es5id: 10.4.3-1-57gs
description: >
    Checking 'this' from a global scope (Literal setter
    includes strict directive prologue)
---*/

var x = 2;
var o = { set foo(stuff) { "use strict"; x=this;  } }
o.foo = 3;
if (x!==o) {
    throw "'this' had incorrect value!";
}
