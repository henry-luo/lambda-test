

/*---
description: Async function returns an async function. (Async method as a ClassDeclaration element)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated, async]
info: |
    ClassElement :
      MethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
let count = 0;


class C {
  async method(x) {
    return async function() { return new.target; };
  }
}

let c = new C();
let asyncFn = c.method.bind(c);

asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {
  assert.sameValue(result, undefined);
  assert.sameValue(count, 1);
}).then($DONE, $DONE);
