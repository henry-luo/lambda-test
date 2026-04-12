

/*---
esid: sec-array.prototype.flat
description: >
    if the argument is a positive infinity, the depthNum is max depth of the array
includes: [compareArray.js]
features: [Array.prototype.flat]
---*/

var a = [1, [2, [3, [4]]]]
assert.compareArray(a.flat(Number.POSITIVE_INFINITY), [1, 2, 3, 4], 'a.flat(Number.POSITIVE_INFINITY) must return [1, 2, 3, 4]');
