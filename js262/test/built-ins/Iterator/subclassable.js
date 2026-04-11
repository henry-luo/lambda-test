

/*---
esid: sec-iterator-constructor
description: >
  The Iterator constructor is designed to be subclassable.
info: |
  The Iterator constructor

  - is designed to be subclassable. It may be used as the value of an extends clause of a class defintion.

features: [iterator-helpers]
---*/

class SubIterator extends Iterator {}

assert.sameValue(
  new SubIterator() instanceof SubIterator,
  true,
  'The result of `(new SubIterator() instanceof SubIterator)` is true'
);
assert.sameValue(
  new SubIterator() instanceof Iterator,
  true,
  'The result of `(new SubIterator() instanceof Iterator)` is true'
);
