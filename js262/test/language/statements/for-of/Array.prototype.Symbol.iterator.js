

/*---
description: >
    The method should return a valid iterator that can be traversed using a
    `for...of` loop.
es6id: 22.1.3.30
features: [Symbol.iterator]
---*/

var array = [0, 'a', true, false, null, , undefined, NaN];
var i = 0;

for (var value of array[Symbol.iterator]()) {
  assert.sameValue(value, array[i], 'element at index ' + i);
  i++;
}

assert.sameValue(i, 8, 'Visits all elements');
