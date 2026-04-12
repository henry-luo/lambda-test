

/*---
es5id: 15.3.5-2gs
description: >
    StrictMode - error is thrown when reading the 'caller' property of
    a function object
flags: [onlyStrict]
---*/

function _15_3_5_1_gs() {}

assert.throws(TypeError, function() {
  _15_3_5_1_gs.caller;
});
