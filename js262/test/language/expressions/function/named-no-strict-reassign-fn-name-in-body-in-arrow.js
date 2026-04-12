

/*---
description: Reassignment of function name is silently ignored in non-strict mode code. (named function expression in non-strict mode code)
esid: sec-function-definitions-runtime-semantics-evaluation
flags: [generated, noStrict]
info: |
    FunctionExpression : function BindingIdentifier ( FormalParameters ) { FunctionBody }

---*/


let callCount = 0;
let ref = function BindingIdentifier() {
  callCount++;
  (() => {
    BindingIdentifier = 1;
  })();
  return BindingIdentifier;
};

assert.sameValue(ref(), ref);
assert.sameValue(callCount, 1, 'function invoked exactly once');
