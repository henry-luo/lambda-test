

/*---
esid: sec-method-definitions
es6id: 14.3
description: >
  YieldExpression cannot be used within the FormalParameters of a class method
info: |
  MethodDefinition[Yield] :

    PropertyName[?Yield] ( StrictFormalParameters ) { FunctionBody }
features: [generators, default-parameters]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

0, class {
  static m(x = yield) {}
};
