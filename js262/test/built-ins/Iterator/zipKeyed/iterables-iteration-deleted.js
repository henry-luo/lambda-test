

/*---
esid: sec-iterator.zipkeyed
description: >
  Deleted properties are skipped in "iterables" iteration.
info: |
  Iterator.zipKeyed ( iterables [ , options ] )
    ...
    10. Let allKeys be ? iterables.[[OwnPropertyKeys]]().
    11. Let keys be a new empty List.
    12. For each element key of allKeys, do
      a. Let desc be Completion(iterables.[[GetOwnProperty]](key)).
      ...
      c. If desc is not undefined and desc.[[Enumerable]] is true, then
        ...
includes: [compareArray.js]
features: [joint-iteration]
---*/

var log = [];

var iterables = {
  get a() {
    log.push("get a");

    
    delete iterables.b;

    return [];
  },
  get b() {
    throw new Test262Error("unexpected get b");
  },
  get c() {
    log.push("get c");

    
    iterables.d = null;

    return [];
  },
};

Iterator.zipKeyed(iterables);

assert.compareArray(log, [
  "get a",
  "get c",
]);
