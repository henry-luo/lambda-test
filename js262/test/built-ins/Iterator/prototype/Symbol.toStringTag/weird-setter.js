

/*---
esid: sec-set-iteratorprototype-@@tostringtag
description: weird setter
info: |
  The value of the [[Get]] attribute is a built-in function that requires no arguments. It performs the following steps when called:
    1. Return *"Iterator"*.

  The value of the [[Set]] attribute is a built-in function that takes an argument _v_. It performs the following steps when called:
    1. Perform ? SetterThatIgnoresPrototypeProperties(%Iterator.prototype%, %Symbol.toStringTag%, _v_).
    2. Return *undefined*.
features: [iterator-helpers]
---*/

let IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))

let sentinel = 'a';

let { get, set } = Object.getOwnPropertyDescriptor(Iterator.prototype, Symbol.toStringTag);

assert.sameValue(Iterator.prototype[Symbol.toStringTag], 'Iterator');
assert.sameValue(get.call(), 'Iterator');


assert.throws(TypeError, () => set.call(undefined, ''));
assert.throws(TypeError, () => set.call(null, ''));
assert.throws(TypeError, () => set.call(true, ''));


assert.throws(TypeError, () => set.call(IteratorPrototype, ''));
assert.throws(TypeError, () => IteratorPrototype[Symbol.toStringTag] = '');

assert.sameValue(Iterator.prototype[Symbol.toStringTag], 'Iterator');
assert.sameValue(get.call(), 'Iterator');


let FakeGeneratorPrototype = Object.create(IteratorPrototype);
Object.freeze(IteratorPrototype);
FakeGeneratorPrototype[Symbol.toStringTag] = sentinel;
assert.sameValue(FakeGeneratorPrototype[Symbol.toStringTag], sentinel);

assert.sameValue(Iterator.prototype[Symbol.toStringTag], 'Iterator');
assert.sameValue(get.call(), 'Iterator');


let o = { [Symbol.toStringTag]: sentinel + 'a' };
set.call(o, sentinel);
assert.sameValue(o[Symbol.toStringTag], sentinel);

assert.sameValue(Iterator.prototype[Symbol.toStringTag], 'Iterator');
assert.sameValue(get.call(), 'Iterator');
