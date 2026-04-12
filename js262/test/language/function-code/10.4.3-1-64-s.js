

/*---
es5id: 10.4.3-1-64-s
description: >
    checking 'this' (strict function declaration called by non-strict Function
    constructor)
---*/

this.f = function() { "use strict"; return this===undefined;};
assert(Function("return f();")());
