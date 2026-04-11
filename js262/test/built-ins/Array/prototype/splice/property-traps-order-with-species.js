

/*---
esid: sec-array.prototype.splice
description: >
  Ensure the correct property traps are called on the new array.
features: [Proxy, Symbol.species]
includes: [compareArray.js]
---*/

var log = [];

var a = [0, 1];
a.constructor = {};

a.constructor[Symbol.species] = function(len) {
    return new Proxy(new Array(len), new Proxy({}, {
        get(t, pk, r) {
            log.push(pk);
        }
    }));
};

var r = a.splice(0);

assert.compareArray([
    
    "defineProperty",

    
    "defineProperty",

    
    "set",
    "getOwnPropertyDescriptor",
    "defineProperty",
], log);
