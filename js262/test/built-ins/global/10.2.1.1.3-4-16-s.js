

/*---
es5id: 10.2.1.1.3-4-16-s
description: >
    Strict Mode - TypeError is thrown when changing the value of a
    Value Property of the Global Object under strict mode (NaN)
flags: [onlyStrict]
---*/


assert.throws(TypeError, function() {
  NaN = 12;
});
