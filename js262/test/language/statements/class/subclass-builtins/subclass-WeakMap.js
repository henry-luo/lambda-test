

/*---
description: new SubWeakMap() instanceof WeakMap (Subclass instanceof Heritage)
features: [WeakMap]
flags: [generated]
---*/


class Subclass extends WeakMap {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof WeakMap);
