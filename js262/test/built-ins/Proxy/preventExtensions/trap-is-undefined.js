

/*---
es6id: 9.5.4
description: >
    Return target.[[PreventExtensions]]() if target is undefined.
features: [Proxy, Reflect]
---*/

var target = {};
var p = new Proxy(target, {});

assert.sameValue(Reflect.preventExtensions(p), true);
