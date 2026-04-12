

/*---
esid: sec-array.prototype.flatmap
description: >
    Behavior when given a bound function
includes: [compareArray.js]
features: [Array.prototype.flatMap]
---*/

var a = [0, 0];
assert.compareArray(a.flatMap(function() {
  return this;
}.bind([1, 2])), [1, 2, 1, 2], 'a.flatMap(function() {return this;}.bind([1, 2])) must return [1, 2, 1, 2]');
