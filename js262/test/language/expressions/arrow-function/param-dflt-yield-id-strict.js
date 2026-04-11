

/*---
esid: sec-arrow-function-definitions
es6id: 14.2
description: >
  The `yield` token is interpreted as a FutureReservedWord within strict mode
info: |
  ArrowFunction[In, Yield] :

    ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]
features: [default-parameters]
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

(x = yield) => {};
