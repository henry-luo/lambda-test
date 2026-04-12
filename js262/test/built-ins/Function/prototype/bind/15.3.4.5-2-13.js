

/*---
es5id: 15.3.4.5-2-13
description: Function.prototype.bind throws TypeError if 'Target' is a number
---*/


assert.throws(TypeError, function() {
  Function.prototype.bind.call(5);
});
