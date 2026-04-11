

/*---
es5id: 15.5.4.20-3-12
description: >
    String.prototype.trim - 'S' is a string that ends with null
    character
---*/

assert.sameValue("abc\0\u0000".trim(), "abc\0\u0000", '"abc\0\u0000".trim()');
