

/*---
esid: sec-%typedarray%.from
description: Returns error produced by advancing the iterator
info: |
  22.2.2.1.1 Runtime Semantics: IterableToArrayLike( items )

  2. If usingIterator is not undefined, then
    ...
    d. Repeat, while next is not false
      i. Let next be ? IteratorStep(iterator).
  ...
includes: [testTypedArray.js]
features: [Symbol.iterator, TypedArray]
---*/

var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};

assert.throws(Test262Error, function() {
  TypedArray.from(iter);
});
