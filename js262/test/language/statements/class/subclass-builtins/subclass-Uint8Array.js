

/*---
description: new SubUint8Array() instanceof Uint8Array (Subclass instanceof Heritage)
features: [TypedArray, Uint8Array]
flags: [generated]
---*/


class Subclass extends Uint8Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Uint8Array);
