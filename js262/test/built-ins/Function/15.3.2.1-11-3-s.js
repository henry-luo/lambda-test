

/*---
es5id: 15.3.2.1-11-3-s
description: >
    Function constructor having a formal parameter named 'eval' throws
    SyntaxError if function body is strict mode
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
  Function('eval', '"use strict";');
});
