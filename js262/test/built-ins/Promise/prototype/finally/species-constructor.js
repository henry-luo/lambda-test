

/*---
author: Sathya Gunasekaran
description: finally calls the SpeciesConstructor and creates the right amount of promises
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
flags: [async]
---*/


var count = 0;
class FooPromise extends Promise {
  constructor(resolve, reject) {
    count++;
    return super(resolve, reject);
  }
}

new FooPromise(r => r())
  .finally(() => {})
  .then(() => {
    assert.sameValue(count, 7, "7 new promises were created");
  }).then($DONE, $DONE);
