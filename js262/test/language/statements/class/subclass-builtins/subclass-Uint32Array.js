

/*---
description: new SubUint32Array() instanceof Uint32Array (Subclass instanceof Heritage)
features: [TypedArray, Uint32Array]
flags: [generated]
---*/


class Subclass extends Uint32Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Uint32Array);
