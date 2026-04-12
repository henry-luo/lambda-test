

/*---
description: >
    Array instances should be able to be traversed using a `for...of` loop.
es6id: 13.6.4
---*/

var array = [0, 'a', true, false, null, , undefined, NaN];
var i = 0;

for (var value of array) {
  assert.sameValue(value, array[i], 'element at index ' + i);
  i++;
}

assert.sameValue(i, 8, 'Visits all elements');
