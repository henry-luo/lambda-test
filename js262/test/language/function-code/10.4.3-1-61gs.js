

/*---
es5id: 10.4.3-1-61gs
description: >
    checking 'this' from a global scope (Injected setter includes strict
    directive prologue)
---*/

var o = {};
var x = 2;
Object.defineProperty(o, "foo", { set: function(stuff) { "use strict"; x=this; } });
o.foo = 3;
if (x!==o) {
    throw "'this' had incorrect value!";
}
