

/*---
es5id: 10.2.1.1.3-4-18-s
description: >
    Strict Mode - TypeError is thrown when changing the value of a
    Value Property of the Global Object under strict mode (undefined)
flags: [onlyStrict]
---*/


assert.throws(TypeError, function() {
  undefined = 12;
});
