

/*---
es5id: 15.5.4.20-2-50
description: >
    String.prototype.trim - 'this' is a Error Object that converts to
    a string
---*/

var errObj = new Error("test");

assert.sameValue(String.prototype.trim.call(errObj), "Error: test", 'String.prototype.trim.call(errObj)');
