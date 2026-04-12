

/*---
info: |
    The [[Class]] property of the newly constructed object
    is set to "Boolean"
esid: sec-boolean-constructor
description: For testing toString function is used
---*/

delete Boolean.prototype.toString;

var obj = new Boolean();

assert.sameValue(obj.toString(), "[object Boolean]", 'obj.toString() must return "[object Boolean]"');
