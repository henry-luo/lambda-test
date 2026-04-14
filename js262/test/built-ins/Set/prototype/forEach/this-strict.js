

/*---
esid: sec-set.prototype.forEach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    ...

flags: [onlyStrict]
---*/

var s = new Set([1]);
var counter = 0;

s.forEach(function() {
  assert.sameValue(this, undefined, "`this` is `undefined` in strict mode code");
  counter++;
});

assert.sameValue(counter, 1, "`forEach` is not a no-op");
