

/*---
es5id: 15.5.4.20-1-8
description: >
    String.prototype.trim works for a primitive string (value is '
    abc')
---*/

var strObj = String("    abc");

assert.sameValue(strObj.trim(), "abc", 'strObj.trim()');
assert.sameValue(strObj.toString(), "    abc", 'strObj.toString()');
