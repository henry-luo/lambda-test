

/*---
esid: sec-iterator.from
description: >
  Iterator.from is not constructible.

  Built-in function objects that are not identified as constructors do not implement the [[Construct]] internal method unless otherwise specified in the description of a particular function.
features: [iterator-helpers]
---*/
function* g() {}

assert.throws(TypeError, () => {
  new Iterator.from();
});

assert.throws(TypeError, () => {
  new Iterator.from(g());
});

assert.throws(TypeError, () => {
  new class extends Iterator {}.from(g());
});
