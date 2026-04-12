

/*---
esid: sec-iteration-statements
description: >
  Initializer is not allowed in head's ForBinding position.
info: |
  IterationStatement:
    for await (var ForBinding of AssignmentExpression) Statement
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

async function fn() {
  for await (var [x] = 1 of []) {}
}
