

/*---
es5id: 15.2.3.14-6-1
description: >
    Object.keys - the order of elements in returned array is the same
    with the order of properties in 'O' (dense array)
---*/

var denseArray = [1, 2, 3];

var tempArray = [];
for (var p in denseArray) {
  if (denseArray.hasOwnProperty(p)) {
    tempArray.push(p);
  }
}

var returnedArray = Object.keys(denseArray);

for (var index in returnedArray) {
  assert.sameValue(tempArray[index], returnedArray[index], 'tempArray[index]');
}
