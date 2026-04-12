

/*---
esid: sec-iterator.zipkeyed
description: >
  The "padding" option must be undefined or an object.
info: |
  Iterator.zipKeyed ( iterables [ , options ] )
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
  {},
];

var invalidPadding = [
  null,
  false,
  "",
  Symbol(),
  123,
  123n,
];


Iterator.zipKeyed({}, {mode: "longest"});


for (var padding of validPadding) {
  Iterator.zipKeyed({}, {mode: "longest", padding});
}


for (var padding of invalidPadding) {
  assert.throws(TypeError, function() {
    Iterator.zipKeyed({}, {mode: "longest", padding});
  });
}


for (var padding of invalidPadding) {
  Iterator.zipKeyed({}, {padding});
  Iterator.zipKeyed({}, {mode: undefined, padding});
  Iterator.zipKeyed({}, {mode: "shortest", padding});
  Iterator.zipKeyed({}, {mode: "strict", padding});
}
