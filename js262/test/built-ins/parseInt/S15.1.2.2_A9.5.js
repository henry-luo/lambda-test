

/*---
info: The parseInt property has the attribute DontEnum
esid: sec-parseint-string-radix
description: Checking use propertyIsEnumerable, for-in
---*/

assert.sameValue(
  this.propertyIsEnumerable('parseInt'),
  false,
  'this.propertyIsEnumerable(\'parseInt\') must return false'
);


var result = true;
for (var p in this) {
  if (p === "parseInt") {
    result = false;
  }
}

assert.sameValue(result, true, 'The value of `result` is true');
