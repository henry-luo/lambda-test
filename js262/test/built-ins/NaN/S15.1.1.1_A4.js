

/*---
info: The NaN is DontEnum
es5id: 15.1.1.1_A3.2
description: Use for-in statement
---*/


for (var prop in this) {
  assert.notSameValue(prop, "NaN", 'The value of prop is not "NaN"');
}

