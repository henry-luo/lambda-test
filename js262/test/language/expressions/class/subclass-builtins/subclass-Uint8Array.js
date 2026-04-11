

/*---
description: new SubUint8Array() instanceof Uint8Array (Subclass instanceof Heritage)
features: [TypedArray, Uint8Array]
flags: [generated]
---*/


const Subclass = class extends Uint8Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Uint8Array);
