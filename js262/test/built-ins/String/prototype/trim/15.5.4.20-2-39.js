

/*---
es5id: 15.5.4.20-2-39
description: >
    String.prototype.trim - 'this' is an object which has an own
    valueOf method
---*/

var obj = {
  valueOf: function() {
    return "abc";
  }
};

assert.sameValue(String.prototype.trim.call(obj), "[object Object]", 'String.prototype.trim.call(obj)');
