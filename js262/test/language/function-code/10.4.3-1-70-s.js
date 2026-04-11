

/*---
es5id: 10.4.3-1-70-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.apply(globalObject))
---*/

function f() { "use strict"; return this;};

assert.sameValue(f.apply(this), this, 'f.apply(this)');
