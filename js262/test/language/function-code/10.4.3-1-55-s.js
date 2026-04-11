

/*---
es5id: 10.4.3-1-55-s
description: >
    Strict Mode - checking 'this' (Literal getter includes strict
    directive prologue)
---*/

var o = { get foo() { "use strict"; return this; } }

assert.sameValue(o.foo, o, 'o.foo');
