

/*---
esid: sec-iterator.zip
description: >
  Accepts String objects as inputs.
includes: [compareArray.js]
features: [joint-iteration]
---*/

var result = Array.from(Iterator.zip([Object("abc"), Object("123")]));

assert.sameValue(result.length, 3);
assert.compareArray(result[0], ["a", "1"]);
assert.compareArray(result[1], ["b", "2"]);
assert.compareArray(result[2], ["c", "3"]);
