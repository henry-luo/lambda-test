

/*---
esid: sec-enumerate-object-properties
description: Properties added to the object during iteration are not enumerated
features: [for-in-order]
includes: [compareArray.js]
---*/

var o = {
  p1: 'p1',
  p2: 'p2',
  p3: 'p3',
};

var keys = [];
for (var key in o) {
  if (key === 'p1') {
    o.p4 = 'p4';
  }
  keys.push(key);
}

assert.compareArray(keys, ['p1', 'p2', 'p3']);
