

/*---
es5id: 10.4.3-1-63-s
description: >
    checking 'this' (strict function declaration called by non-strict eval)
---*/

function f() { "use strict"; return this===undefined;};
assert(eval("f();"));
