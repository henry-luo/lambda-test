

/*---
description: >
    Errors thrown during method definition are forwarded to the runtime.
es6id: 14.3.8
---*/

assert.throws(Test262Error, function() {
  ({
    [(function() { throw new Test262Error(); }())]() {}
  });
});
