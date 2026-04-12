

/*---
description: new SubFloat64Array() instanceof Float64Array (Subclass instanceof Heritage)
features: [TypedArray, Float64Array]
flags: [generated]
---*/


class Subclass extends Float64Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Float64Array);
