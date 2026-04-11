

/*---
esid: sec-arrow-function-definitions
es6id: 14.2
description: >
  The `yield` token is interpreted contextually outside of strict mode
info: |
  ArrowFunction[In, Yield] :

    ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

  14.2.1 Static Semantics: Early Errors#

  ArrowFunction : ArrowParameters=>ConciseBody

  - It is a Syntax Error if ArrowParameters Contains YieldExpression is true.
features: [generators, default-parameters]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function *g() {
  (x = yield) => {};
}
