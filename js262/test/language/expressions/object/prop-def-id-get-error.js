

/*---
es6id: 12.2.5.9
description: >
    Errors thrown during IdentifierReference value retrieval are forwarded to
    the runtime.
---*/

assert.throws(ReferenceError, function() {
  ({ unresolvable });
});
