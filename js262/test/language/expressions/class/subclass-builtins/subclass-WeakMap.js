

/*---
description: new SubWeakMap() instanceof WeakMap (Subclass instanceof Heritage)
features: [WeakMap]
flags: [generated]
---*/


const Subclass = class extends WeakMap {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof WeakMap);
