

/*---
es5id: 10.4.3-1-72-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.call(null))
---*/

function f() { "use strict"; return this===null;};

assert(f.call(null), 'f.call(null) !== true');
