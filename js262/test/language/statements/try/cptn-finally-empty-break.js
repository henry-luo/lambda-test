

/*---
esid: sec-try-statement-runtime-semantics-evaluation
description: Abrupt completion from finally block calls UpdatEmpty()
info: |
  13.15.8 Runtime Semantics: Evaluation
  TryStatement : try Block Finally
    ...
    2. Let F be the result of evaluating Finally.
    ...
    4. Return Completion(UpdateEmpty(F, undefined)).
---*/


var completion = eval("for (var i = 0; i < 2; ++i) { if (i) { try {} finally { break; } } 'bad completion'; }");
assert.sameValue(completion, undefined);
