

/*---
es5id: 10.4.3-1-93gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function.prototype.call(someObject))
flags: [noStrict]
---*/

var o = {};
function f() { return this===o;};
if (! ((function () {"use strict"; return f.call(o); })())){
    throw "'this' had incorrect value!";
}
