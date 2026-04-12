

/*---
esid: sec-for-in-and-for-of-statements
description: >
  ForDeclaration containing 'await using' does not support an initializer
info: |
  IterationStatement:
    for (ForDeclaration of AssignmentExpression) Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

const obj = { [Symbol.dispose]() { } };
async function f() {
  for (await using x = obj of []) {}
}
