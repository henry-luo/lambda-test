

/*---
description: Reassignment of function name is silently ignored in non-strict mode code. (named function expression in strict mode code)
esid: sec-function-definitions-runtime-semantics-evaluation
flags: [generated, onlyStrict]
info: |
    FunctionExpression : function BindingIdentifier ( FormalParameters ) { FunctionBody }

---*/


let callCount = 0;
let ref = function BindingIdentifier() {
  callCount++;
  eval("BindingIdentifier = 1");
  return BindingIdentifier;
};

assert.throws(TypeError, () => {
  ref();
});
assert.sameValue(callCount, 1, 'function invoked exactly once');
