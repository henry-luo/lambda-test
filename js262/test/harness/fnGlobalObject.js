

/*---
description: >
    Including fnGlobalObject.js will expose a function:

        fnGlobalObject

    fnGlobalObject returns a reference to the global object.

includes: [fnGlobalObject.js]
---*/

var gO = fnGlobalObject();

assert(typeof gO === "object");
assert.sameValue(gO, this);
