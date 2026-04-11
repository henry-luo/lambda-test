

/*---
description: >
    The method should return a valid iterator that can be traversed using a
    `for...of` loop.
es6id: 22.1.3.13
---*/

var array = [0, 'a', true, false, null, , undefined, NaN];
var i = 0;

for (var value of array.keys()) {
  assert.sameValue(value, i, 'element at index ' + i);
  i++;
}

assert.sameValue(i, 8, 'Visits all elements');
