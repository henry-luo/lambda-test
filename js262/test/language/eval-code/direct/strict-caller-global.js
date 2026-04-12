

/*---
esid: sec-performeval
description: Script will be script if strictCaller is true
info: |
    ...
    10. If strictCaller is true, let strictEval be true.
    ...
    12. Let runningContext be the running execution context.
    ...
negative:
  phase: runtime
  type: SyntaxError
flags: [onlyStrict]
---*/


eval('var public = 1;');
