

/*---
esid: sec-array.of
description: >
  Return abrupt from setting the length property.
info: |
  Array.of ( ...items )

  ...
  9. Let setStatus be Set(A, "length", len, true).
  10. ReturnIfAbrupt(setStatus).
  ...
---*/

function T() {
  Object.defineProperty(this, 'length', {
    set: function() {
      throw new Test262Error();
    }
  });
}

assert.throws(Test262Error, function() {
  Array.of.call(T);
}, 'Array.of.call(T) throws a Test262Error exception');
