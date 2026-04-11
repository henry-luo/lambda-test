

/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter is not constructible.

  Built-in function objects that are not identified as constructors do not implement the [[Construct]] internal method unless otherwise specified in the description of a particular function.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  new iter.filter();
});

assert.throws(TypeError, () => {
  new iter.filter(() => true);
});

assert.throws(TypeError, () => {
  new Iterator.prototype.filter(() => true);
});

assert.throws(TypeError, () => {
  new class extends Iterator {}.filter(() => true);
});
