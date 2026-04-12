

/*---
es5id: 10.4.3-1-88gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function.prototype.apply(someObject))
flags: [noStrict]
---*/

var o = {};
function f() { return this===o;};
if (! ((function () {"use strict"; return f.apply(o);})())){
    throw "'this' had incorrect value!";
}
