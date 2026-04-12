

/*---
es5id: 10.4.3-1-54-s
description: >
    checking 'this' (Literal getter)
---*/

var o = { get foo() { return this; } }

assert.sameValue(o.foo, o, 'o.foo');
