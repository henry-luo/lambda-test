

/*---
author: Jordan Harband
description: finally on resolved Promise calls the SpeciesConstructor
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/

class FooPromise extends Promise {
  static get[Symbol.species]() {
    return Promise;
  }
}

var p = Promise.resolve().finally(() => FooPromise.resolve());

assert.sameValue(p instanceof Promise, true);
assert.sameValue(p instanceof FooPromise, false);
