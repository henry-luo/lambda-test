

/*---
info: Boolean.prototype has the attribute DontEnum
esid: sec-boolean.prototype
description: Checking if enumerating the Boolean.prototype property fails
---*/

for (x in Boolean) {
  assert.notSameValue(x, "prototype", 'The value of x is not "prototype"');
}

assert(
  !Boolean.propertyIsEnumerable('prototype'),
  'The value of !Boolean.propertyIsEnumerable(\'prototype\') is expected to be true'
);
