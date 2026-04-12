

/*---
es5id: 15.11.4.4-9-1
description: >
    Error.prototype.toString return 'name' when 'name' is non-empty
    string and 'msg' is empty string
---*/

var errObj = new Error();
errObj.name = "ErrorName";

assert.sameValue(errObj.toString(), "ErrorName", 'errObj.toString()');
