

/*---
es5id: 10.4.3-1-73-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.call(undefined))
---*/

function f() { "use strict"; return this===undefined;};

assert(f.call(undefined), 'f.call(undefined) !== true');
