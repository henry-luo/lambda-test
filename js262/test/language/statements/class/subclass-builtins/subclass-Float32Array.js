

/*---
description: new SubFloat32Array() instanceof Float32Array (Subclass instanceof Heritage)
features: [TypedArray, Float32Array]
flags: [generated]
---*/


class Subclass extends Float32Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Float32Array);
