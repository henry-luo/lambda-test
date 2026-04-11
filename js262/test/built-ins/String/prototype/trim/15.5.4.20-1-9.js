

/*---
es5id: 15.5.4.20-1-9
description: >
    String.prototype.trim works for a String object which value is
    undefined
---*/

var strObj = new String(undefined);

assert.sameValue(strObj.trim(), "undefined", 'strObj.trim()');
