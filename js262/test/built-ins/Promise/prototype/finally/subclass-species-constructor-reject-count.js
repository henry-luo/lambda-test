

/*---
author: Jordan Harband
description: finally on rejected Promise calls the SpeciesConstructor
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/

class FooPromise extends Promise {
  static get[Symbol.species]() {
    return Promise;
  }
}

var p = Promise.reject().finally(() => FooPromise.reject());

assert.sameValue(p instanceof Promise, true);
assert.sameValue(p instanceof FooPromise, false);
