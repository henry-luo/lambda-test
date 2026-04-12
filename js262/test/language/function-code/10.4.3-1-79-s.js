

/*---
es5id: 10.4.3-1-79-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.bind(someObject)())
---*/

var o = {};
function f() { "use strict"; return this===o;};

assert(f.bind(o)(), 'f.bind(o)() !== true');
