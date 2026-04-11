

/*---
description: A trailing comma should not increase the respective length, using default parameters (async function declaration)
esid: sec-async-function-definitions
features: [async-functions]
flags: [generated, async]
info: |
    14.6 Async Function Definitions

    AsyncFunctionDeclaration :
      async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }


    Trailing comma in the parameters list

    14.1 Function Definitions

    FormalParameters[Yield, Await] : FormalParameterList[?Yield, ?Await] ,
---*/


var callCount = 0;


async function ref(a, b = 39,) {
  assert.sameValue(a, 42);
  assert.sameValue(b, 39);
  callCount = callCount + 1;
}

ref(42, undefined, 1).then(() => {
    assert.sameValue(callCount, 1, 'function invoked exactly once');
}).then($DONE, $DONE);

assert.sameValue(ref.length, 1, 'length is properly set');
