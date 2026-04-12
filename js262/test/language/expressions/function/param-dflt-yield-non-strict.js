

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
flags: [noStrict]
---*/

var yield = 23;
var paramValue;

function *g() {
  (function(x = yield) {
    paramValue = x;
  }());
}

g().next();

assert.sameValue(paramValue, 23);
