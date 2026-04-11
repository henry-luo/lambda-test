

/*---
esid: sec-parsefloat-string
description: >
    pareseFloat - 'trimmedString' is the empty string when inputString
    does not contain any such characters
---*/

assert.sameValue(parseFloat(""), NaN, 'parseFloat("")');
