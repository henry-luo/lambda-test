

/*---
es5id: 10.4.3-1-76-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.bind()())
---*/

function f() { "use strict"; return this===undefined;};

assert(f.bind()(), 'f.bind()() !== true');
