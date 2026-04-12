

/*---
esid: sec-set-iteratorprototype-constructor
description: weird setter
info: |
  The value of the [[Get]] attribute is a built-in function that requires no arguments. It performs the following steps when called:
    1. Return %Iterator%.

  The value of the [[Set]] attribute is a built-in function that takes an argument _v_. It performs the following steps when called:
    1. Perform ? SetterThatIgnoresPrototypeProperties(%Iterator.prototype%, *"constructor"*, _v_).
    2. Return *undefined*.
features: [iterator-helpers]
---*/

let IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))

let sentinel = {};

let { get, set } = Object.getOwnPropertyDescriptor(Iterator.prototype, 'constructor');

assert.sameValue(Iterator.prototype.constructor, Iterator);
assert.sameValue(get.call(), Iterator);


assert.throws(TypeError, () => set.call(undefined, ''));
assert.throws(TypeError, () => set.call(null, ''));
assert.throws(TypeError, () => set.call(true, ''));


assert.throws(TypeError, () => set.call(IteratorPrototype, ''));
assert.throws(TypeError, () => IteratorPrototype.constructor = '');

assert.sameValue(Iterator.prototype.constructor, Iterator);
assert.sameValue(get.call(), Iterator);


let FakeGeneratorPrototype = Object.create(IteratorPrototype);
Object.freeze(IteratorPrototype);
FakeGeneratorPrototype.constructor = sentinel;
assert.sameValue(FakeGeneratorPrototype.constructor, sentinel);

assert.sameValue(Iterator.prototype.constructor, Iterator);
assert.sameValue(get.call(), Iterator);


let o = { constructor: sentinel + 'a' };
set.call(o, sentinel);
assert.sameValue(o.constructor, sentinel);

assert.sameValue(Iterator.prototype.constructor, Iterator);
assert.sameValue(get.call(), Iterator);
