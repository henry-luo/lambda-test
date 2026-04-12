

/*---
info: LINE SEPARATOR (U+2028) may occur between any two tokens
esid: sec-line-terminators
es5id: 7.3_A1.3
description: Insert LINE SEPARATOR (\u2028) between tokens of var x=1
---*/

var x = 1 ;

assert.sameValue(x, 1);
