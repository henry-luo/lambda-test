

/*---
info: The Infinity is DontEnum
es5id: 15.1.1.2_A4
description: Use for-in statement
---*/


for (var prop in this) {
  assert.notSameValue(prop, "Infinity", 'The value of prop is not "Infinity"');
}

