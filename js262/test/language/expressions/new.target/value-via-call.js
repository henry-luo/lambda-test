

/*---
esid: sec-function-calls-runtime-semantics-evaluation
es6id: 12.3.4.1
description: Value when invoked via CallExpression
info: |
  CallExpression : MemberExpressionArguments

  [...]
  8. Return ? EvaluateDirectCall(func, thisValue, Arguments, tailCall).
features: [new.target]
---*/

var newTarget = null;

function f() {
  newTarget = new.target;
}

f();

assert.sameValue(newTarget, undefined);
