

/*---
description: yield * (async iterator) is treated as throw value (Async generator Function declaration)
esid: prod-AsyncGeneratorDeclaration
features: [async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorDeclaration:
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }

---*/
let error = new Error();
let iterable = [
  Promise.reject(error),
  "unreachable"
];


var callCount = 0;

async function *gen() {
  callCount += 1;
  yield * iterable;
}

var iter = gen();

iter.next().then(() => {
  throw new Test262Error("Promise incorrectly resolved.");
}, rejectValue => {
  
  assert.sameValue(rejectValue, error);

  iter.next().then(({done, value}) => {
    
    assert.sameValue(done, true, "The value of IteratorResult.done is `true`");
    assert.sameValue(value, undefined, "The value of IteratorResult.value is `undefined`");
  }).then($DONE, $DONE);
}).catch($DONE);

assert.sameValue(callCount, 1);
