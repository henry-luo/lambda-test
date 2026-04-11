

/*---
esid: sec-iteratorprototype.some
description: >
  Arguments and this value are evaluated in the correct order
info: |
  %Iterator.prototype%.some ( predicate )

includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let effects = [];

assert.throws(TypeError, function () {
  Iterator.prototype.some.call(
    {
      get next() {
        effects.push('get next');
        return function () {
          return { done: true, value: undefined };
        };
      },
    },
    null
  );
});

assert.compareArray(effects, []);
