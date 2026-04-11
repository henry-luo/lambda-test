

/*---
es6id: 26.2.1
description: >
    The Proxy constructor is the %Proxy% intrinsic object and the
    initial value of the Proxy property of the global object.
features: [Proxy]
---*/

assert.sameValue(typeof Proxy, "function", "`typeof Proxy` is `'function'`");
