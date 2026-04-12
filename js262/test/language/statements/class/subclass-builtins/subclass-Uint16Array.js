

/*---
description: new SubUint16Array() instanceof Uint16Array (Subclass instanceof Heritage)
features: [TypedArray, Uint16Array]
flags: [generated]
---*/


class Subclass extends Uint16Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Uint16Array);
