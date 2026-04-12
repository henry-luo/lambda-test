

/*---
es5id: 10.4.3-1-71-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.call())
---*/

function f() { "use strict"; return this===undefined;};

assert(f.call(), 'f.call() !== true');
