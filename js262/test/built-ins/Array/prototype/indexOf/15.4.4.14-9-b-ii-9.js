

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - both array element and search element
    are String, and they have exactly the same sequence of characters
---*/

assert.sameValue(["", "ab", "bca", "abc"].indexOf("abc"), 3, '["", "ab", "bca", "abc"].indexOf("abc")');
