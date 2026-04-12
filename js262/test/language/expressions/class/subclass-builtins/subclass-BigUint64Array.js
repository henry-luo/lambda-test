

/*---
description: new SubBigUint64Array() instanceof BigUint64Array (Subclass instanceof Heritage)
features: [TypedArray, BigInt]
flags: [generated]
---*/


const Subclass = class extends BigUint64Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof BigUint64Array);
