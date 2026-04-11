

/*---
info: |
    Result of boolean conversion from nonempty string value (length is not
    zero) is true; from empty String (length is zero) is false
esid: sec-toboolean
description: "\"\" is converted to Boolean by explicit transformation"
---*/
assert.sameValue(Boolean(""), false, 'Boolean("") must return false');
