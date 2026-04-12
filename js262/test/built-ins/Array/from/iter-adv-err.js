

/*---
esid: sec-array.from
description: Error advancing iterator
info: |
    [...]
    6. If usingIterator is not undefined, then
       [...]
       g. Repeat
          i. Let Pk be ToString(k).
          ii. Let next be IteratorStep(iterator).
          iii. ReturnIfAbrupt(next).
features: [Symbol.iterator]
---*/

var items = {};
items[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};

assert.throws(Test262Error, function() {
  Array.from(items);
}, 'Array.from(items) throws a Test262Error exception');
