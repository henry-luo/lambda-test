

/*---
description: new SubWeakSet() instanceof WeakSet (Subclass instanceof Heritage)
features: [WeakSet]
flags: [generated]
---*/


class Subclass extends WeakSet {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof WeakSet);
