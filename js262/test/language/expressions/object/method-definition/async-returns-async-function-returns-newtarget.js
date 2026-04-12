

/*---
description: Async function returns an async function. (Async method)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated, async]
info: |
    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
let count = 0;


var obj = {
  async method(x) {
    return async function() { return new.target; };
  }
};

let asyncFn = obj.method;

asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {
  assert.sameValue(result, undefined);
  assert.sameValue(count, 1);
}).then($DONE, $DONE);
