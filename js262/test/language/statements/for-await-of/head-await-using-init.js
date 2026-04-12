

/*---
esid: sec-iteration-statements
description: >
  ForDeclaration containing 'await using' does not allow initializer.
info: |
  IterationStatement:
    for await (ForDeclaration of AssignmentExpression) Statement
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration, explicit-resource-management]
---*/

$DONOTEVALUATE();

async function fn() {
  const obj = { async [Symbol.asyncDispose]() {} };
  for await (await using x = obj of []) {}
}
