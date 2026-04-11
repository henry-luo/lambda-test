

/*---
description: new SubInt16Array() instanceof Int16Array (Subclass instanceof Heritage)
features: [TypedArray, Int16Array]
flags: [generated]
---*/


class Subclass extends Int16Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Int16Array);
