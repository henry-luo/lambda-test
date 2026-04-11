

/*---
info: SPACE (U+0020) between any two tokens is allowed
es5id: 7.2_A1.4_T2
description: Insert real SPACE between tokens of var x=1
---*/

 var x = 2 ;

assert.sameValue(x, 2);
