

/*---
es5id: 13.2-19-b-3gs
description: >
    StrictMode - error is thrown when assign a value to the 'caller'
    property of a function object
flags: [onlyStrict]
---*/

function _13_2_19_b_3_gs() {}

assert.throws(TypeError, function() {
  _13_2_19_b_3_gs.caller = 1;
});
