

/*---
es5id: 15.3.4.5-2-15
description: >
    Function.prototype.bind throws TypeError if 'Target' is Object
    without Call internal method
---*/


assert.throws(TypeError, function() {
  Function.prototype.bind.call({});
});
