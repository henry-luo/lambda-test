

/*---
es5id: 10.4.3-1-58-s
description: >
    checking 'this' (Injected getter)
---*/

var o = {};
Object.defineProperty(o, "foo",  { get: function() { return this; } });

assert.sameValue(o.foo, o, 'o.foo');
