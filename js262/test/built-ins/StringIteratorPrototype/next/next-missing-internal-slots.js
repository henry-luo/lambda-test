

/*---
esid: sec-properties-of-string-iterator-instances
description: >
    If the `this` value does not have all of the internal slots of an String
    Iterator Instance (21.1.5.3), throw a `TypeError` exception.
info: |
  ...
  If O does not have all of the internal slots of a String Iterator Instance (21.1.5.3),
  throw a TypeError exception.
  ...

features: [Symbol.iterator]
---*/

var iterator = ''[Symbol.iterator]();
var object = Object.create(iterator);

assert.throws(TypeError, function() {
  object.next();
});
