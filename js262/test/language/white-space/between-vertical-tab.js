

/*---
info: VERTICAL TAB (U+000B) between any two tokens is allowed
es5id: 7.2_A1.2_T2
description: Insert real VERTICAL TAB between tokens of var x=1
---*/

varx=1;

assert.sameValue(x, 1);
