

/*---
esid: sec-set.prototype.forEach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    ...
---*/

var s = new Set([1]);
var thisArg = {};
var counter = 0;

s.forEach(function() {
  assert.sameValue(this, thisArg, "`this` is `thisArg`");
  counter++;
}, thisArg);

assert.sameValue(counter, 1, "`forEach` is not a no-op");
