

/*---
description: Async function returns an async function. (Static async method as a ClassExpression element)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated, async]
info: |
    ClassElement :
      static MethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
let count = 0;


var C = class {
  static async method(x) {
    let a = arguments;
      return async () => a === arguments;
  }
};

let asyncFn = C.method;

asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {
  assert.sameValue(result, true);
  assert.sameValue(count, 1);
}).then($DONE, $DONE);
