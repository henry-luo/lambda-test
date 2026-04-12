

/*---
es5id: 15.2.3.14-6-3
description: >
    Object.keys - the order of elements in returned array is the same
    with the order of properties in 'O' (String object)
---*/

var str = new String("abc");

var tempArray = [];
for (var p in str) {
  if (str.hasOwnProperty(p)) {
    tempArray.push(p);
  }
}

var returnedArray = Object.keys(str);

for (var index in returnedArray) {
  assert.sameValue(tempArray[index], returnedArray[index], 'tempArray[index]');
}
