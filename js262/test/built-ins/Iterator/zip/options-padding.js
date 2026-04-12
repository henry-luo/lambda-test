

/*---
esid: sec-iterator.zip
description: >
  The "padding" option must be undefined or an object.
info: |
  Iterator.zip ( iterables [ , options ] )
    ...
    6. Let paddingOption be undefined.
    7. If mode is "longest", then
      a. Set paddingOption to ? Get(options, "padding").
      b. If paddingOption is not undefined and paddingOption is not an Object, throw a TypeError exception.
    ...
features: [joint-iteration]
---*/

var validPadding = [
  undefined,
  [],
  Object("string"),
];

var invalidPadding = [
  null,
  false,
  "",
  Symbol(),
  123,
  123n,
];


Iterator.zip([], {mode: "longest"});


for (var padding of validPadding) {
  Iterator.zip([], {mode: "longest", padding});
}


for (var padding of invalidPadding) {
  assert.throws(TypeError, function() {
    Iterator.zip([], {mode: "longest", padding});
  });
}


for (var padding of invalidPadding) {
  Iterator.zip([], {padding});
  Iterator.zip([], {mode: undefined, padding});
  Iterator.zip([], {mode: "shortest", padding});
  Iterator.zip([], {mode: "strict", padding});
}
