

/*---
description: Reassignment of function name is silently ignored in non-strict mode code. (async generator named function expression in strict mode code)
esid: sec-asyncgenerator-definitions-evaluation
features: [async-iteration]
flags: [generated, async, onlyStrict]
includes: [asyncHelpers.js]
info: |
    AsyncGeneratorExpression :
        async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

---*/


let callCount = 0;
let ref = async function * BindingIdentifier() {
  callCount++;
  BindingIdentifier = 1;
  return BindingIdentifier;
};

asyncTest(async () => {
  let catchCount = 0;
  try {
    (await (await ref()).next()).value
  } catch (error) {
    catchCount++;
    assert(error instanceof TypeError);
  }
  assert.sameValue(catchCount, 1);
  assert.sameValue(callCount, 1);
});

