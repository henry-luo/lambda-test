

/*---
esid: sec-function-definitions
es6id: 14.1
description: >
  The `yield` token is interpreted as an IdentifierReference within a generator
  and outside of strict mode
info: |
  FunctionDeclaration[Yield, Default] :
    function BindingIdentifier[?Yield] ( FormalParameters ) { FunctionBody }
features: [generators, default-parameters]
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function *g() {
  function f(x = yield) {
    paramValue = x;
  }
}
