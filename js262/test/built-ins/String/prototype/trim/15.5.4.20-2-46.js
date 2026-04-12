

/*---
es5id: 15.5.4.20-2-46
description: >
    String.prototype.trim - 'this' is a Function Object that converts
    to a string
---*/

var funObj = function() {
  return arguments;
};

assert.sameValue(typeof(String.prototype.trim.call(funObj)), "string", 'typeof(String.prototype.trim.call(funObj))');
