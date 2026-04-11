

/*---
esid: sec-iterator.zipkeyed
description: >
  Iterator.zipKeyed is not constructible.

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in the
  description of a particular function.
features: [joint-iteration]
---*/

assert.throws(TypeError, () => {
  new Iterator.zipKeyed({});
});
