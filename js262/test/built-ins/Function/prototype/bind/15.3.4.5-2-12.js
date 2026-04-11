

/*---
es5id: 15.3.4.5-2-12
description: Function.prototype.bind throws TypeError if 'Target' is a boolean
---*/


assert.throws(TypeError, function() {
  Function.prototype.bind.call(true);
});
