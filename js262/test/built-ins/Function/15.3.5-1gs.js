

/*---
es5id: 15.3.5-1gs
description: >
    StrictMode - error is thrown when reading the 'caller' property of
    a function object
flags: [onlyStrict]
---*/

function fn() {}

assert.throws(TypeError, function() {
  fn.caller;
});
