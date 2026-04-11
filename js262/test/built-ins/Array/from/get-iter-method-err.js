

/*---
esid: sec-array.from
description: Error accessing items' `Symbol.iterator` attribute
info: |
    [...]
    4. Let usingIterator be GetMethod(items, @@iterator).
    5. ReturnIfAbrupt(usingIterator).
features: [Symbol.iterator]
---*/

var items = {};
Object.defineProperty(items, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Array.from(items);
}, 'Array.from(items) throws a Test262Error exception');
