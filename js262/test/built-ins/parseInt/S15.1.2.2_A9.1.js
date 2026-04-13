

/*---
info: The length property of parseInt has the attribute DontEnum
esid: sec-parseint-string-radix
description: Checking use propertyIsEnumerable, for-in
---*/

assert.sameValue(
  parseInt.propertyIsEnumerable('length'),
  false,
  'parseInt.propertyIsEnumerable(\'length\') must return false'
);


var result = true;
for (var p in parseInt) {
  if (p === "length") {
    result = false;
  }
}

assert.sameValue(result, true, 'The value of `result` is true');
