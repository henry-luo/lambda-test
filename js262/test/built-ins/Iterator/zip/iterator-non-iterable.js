

/*---
esid: sec-iterator.zip
description: >
  Throws a TypeError when the "iterables" argument is not iterable.
features: [joint-iteration]
---*/

var invalidIterables = [
  Object.create(null),
  Object.create(null, {
    next: { value: function(){} },
    return: { value: function(){} },
  }),
];


for (var iterables of invalidIterables) {
  assert.throws(TypeError, function() {
    Iterator.zip(iterables);
  });
}
