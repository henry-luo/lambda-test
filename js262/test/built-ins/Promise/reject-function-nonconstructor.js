

/*---
es6id: 25.4.1.3.1
description: Promise Reject functions are not constructors
info: |
  17 ECMAScript Standard Built-in Objects:
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified
    in the description of a particular function.
---*/

var rejectFunction;
new Promise(function(resolve, reject) {
  rejectFunction = reject;
});

assert.sameValue(Object.prototype.hasOwnProperty.call(rejectFunction, "prototype"), false);
assert.throws(TypeError, function() {
  new rejectFunction();
});
