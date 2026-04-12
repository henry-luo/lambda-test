

/*---
es5id: 10.4.3-1-78-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.bind(undefined)())
---*/

function f() { "use strict"; return this===undefined;};

assert(f.bind(undefined)(), 'f.bind(undefined)() !== true');
