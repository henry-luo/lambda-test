

/*---
esid: sec-parseint-string-radix
description: >
    parseInt - 'S' is the empty string when inputString does not
    contain any such characters
---*/

assert.sameValue(parseInt(""), NaN, 'parseInt("") must return NaN');
