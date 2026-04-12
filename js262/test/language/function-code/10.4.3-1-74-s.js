

/*---
es5id: 10.4.3-1-74-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.call(someObject))
---*/

var o = {};
function f() { "use strict"; return this===o;};

assert(f.call(o), 'f.call(o) !== true');
