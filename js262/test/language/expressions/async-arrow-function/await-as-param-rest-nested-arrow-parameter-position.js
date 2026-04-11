

/*---
esid: sec-async-arrow-function-definitions
description: >
  It is a SyntaxError if FormalParameters' default expressions contains await.
negative:
  phase: parse
  type: SyntaxError
features: [async-functions]
---*/

$DONOTEVALUATE();

async(a = (...await) => {}) => {};
