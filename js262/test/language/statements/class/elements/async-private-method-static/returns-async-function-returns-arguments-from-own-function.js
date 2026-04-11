

/*---
description: Async function returns an async function. (Static async private method as a ClassDeclaration element)
esid: prod-AsyncMethod
features: [async-functions, class-static-methods-private]
flags: [generated, async]
info: |
    ClassElement :
      static PrivateMethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] # PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
let count = 0;


class C {
  static async #method(x) {
    let a = arguments;
      return async function() { return a === arguments; };
  }
  static async method(x) {
    return this.#method(x);
  }
}

let asyncFn = C.method.bind(C);

asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {
  assert.sameValue(result, false);
  assert.sameValue(count, 1);
}).then($DONE, $DONE);
