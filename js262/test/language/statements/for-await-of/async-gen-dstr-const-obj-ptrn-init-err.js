

/*---
esid: sec-iteration-statements
description: >
  Initializer is not allowed in head's ForDeclaration position.
info: |
  IterationStatement:
    for await (ForDeclaration of AssignmentExpression) Statement
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

async function fn() {
  for await (const {x} = 1 of []) {}
}
