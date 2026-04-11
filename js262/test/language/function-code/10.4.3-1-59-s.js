

/*---
es5id: 10.4.3-1-59-s
description: >
    checking 'this' (Injected getter includes strict directive prologue)
---*/

var o = {};
Object.defineProperty(o, "foo", { get: function() { "use strict"; return this; } });

assert.sameValue(o.foo, o, 'o.foo');
