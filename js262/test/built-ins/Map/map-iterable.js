

/*---
esid: sec-map-iterable
description: >
  Contructor returns a map object set with the elements from the iterable
  argument.
info: |
  Map ( [ iterable ] )

  ...
  9. Repeat
    a. Let next be IteratorStep(iter).
    b. ReturnIfAbrupt(next).
    c. If next is false, return map.
    ...
---*/

var m = new Map([
  ["attr", 1],
  ["foo", 2]
]);

assert.sameValue(m.size, 2, 'The value of `m.size` is `2`');
assert.sameValue(m.get("attr"), 1);
assert.sameValue(m.get("foo"), 2);
