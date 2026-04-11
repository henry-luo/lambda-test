

/*---
description: new SubWeakSet() instanceof WeakSet (Subclass instanceof Heritage)
features: [WeakSet]
flags: [generated]
---*/


const Subclass = class extends WeakSet {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof WeakSet);
