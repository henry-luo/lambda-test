

/*---
esid: sec-iterator.zip
description: >
  Throws a TypeError when the "iterables" argument is not an object.
info: |
  Iterator.zip ( iterables [ , options ] )
    1. If iterables is not an Object, throw a TypeError exception.
    ...
features: [joint-iteration]
---*/

var invalidIterables = [
  undefined,
  null,
  true,
  "",
  Symbol(),
  0,
  0n,
];


assert.throws(TypeError, function() {
  Iterator.zip();
});


for (var iterables of invalidIterables) {
  assert.throws(TypeError, function() {
    Iterator.zip(iterables);
  });
}


var badOptions = {
  get mode() {
    throw new Test262Error();
  },
  get padding() {
    throw new Test262Error();
  }
};
for (var iterables of invalidIterables) {
  assert.throws(TypeError, function() {
    Iterator.zip(iterables, badOptions);
  });
}
