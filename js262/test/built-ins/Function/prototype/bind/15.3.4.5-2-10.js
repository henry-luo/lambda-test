

/*---
es5id: 15.3.4.5-2-10
description: Function.prototype.bind throws TypeError if 'Target' is undefined
---*/


assert.throws(TypeError, function() {
  Function.prototype.bind.call(undefined);
});
