

/*---
esid: sec-function-definitions
es6id: 14.1
description: >
  The `yield` token is interpreted as an IdentifierReference within a generator
  and outside of strict mode
info: |
  FunctionExpression :
    function BindingIdentifieropt ( FormalParameters ) { FunctionBody }
features: [generators, default-parameters]
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function *g() {
  0, function(x = yield) {
    paramValue = x;
  };
}
