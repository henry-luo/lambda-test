

/*---
es5id: 15.3.4.5-2-14
description: Function.prototype.bind throws TypeError if 'Target' is a string
---*/


assert.throws(TypeError, function() {
  Function.prototype.bind.call("abc");
});
