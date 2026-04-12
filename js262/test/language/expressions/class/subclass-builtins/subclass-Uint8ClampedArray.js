

/*---
description: new SubUint8ClampedArray() instanceof Uint8ClampedArray (Subclass instanceof Heritage)
features: [TypedArray, Uint8ClampedArray]
flags: [generated]
---*/


const Subclass = class extends Uint8ClampedArray {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Uint8ClampedArray);
