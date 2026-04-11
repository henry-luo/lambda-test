

/*---
es5id: 10.4.3-1-62-s
description: >
    checking 'this' (strict function declaration called by non-strict function
    declaration)
---*/

function f() { "use strict"; return this;};
function foo() { return f();}

assert.sameValue(foo(), undefined, 'foo()');
