

/*---
es5id: 15.3.2.1-11-5-s
description: >
    Duplicate combined parameter name in Function constructor throws
    SyntaxError in strict mode
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
  Function('a,a', '"use strict";');
});
