

/*---
esid: sec-iteratorprototype.find
description: >
  Arguments and this value are evaluated in the correct order
info: |
  %Iterator.prototype%.find ( predicate )

includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let effects = [];

assert.throws(TypeError, function () {
  Iterator.prototype.find.call(
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
