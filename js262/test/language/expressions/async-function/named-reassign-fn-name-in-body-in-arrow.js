

/*---
description: Reassignment of function name is silently ignored in non-strict mode code. (async function named expression in non-strict mode code)
esid: sec-async-function-definitions
features: [async-functions]
flags: [generated, async, noStrict]
includes: [asyncHelpers.js]
info: |
    Async Function Definitions

    AsyncFunctionExpression :
      async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

---*/


let callCount = 0;
let ref = async function BindingIdentifier() {
  callCount++;
  (() => {
    BindingIdentifier = 1;
  })();
  return BindingIdentifier;
};

asyncTest(async () => {
  assert.sameValue(await ref(), ref);
  assert.sameValue(callCount, 1, 'function invoked exactly once');
});

