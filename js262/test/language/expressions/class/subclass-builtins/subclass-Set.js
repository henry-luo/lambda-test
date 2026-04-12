

/*---
description: new SubSet() instanceof Set (Subclass instanceof Heritage)
features: [Set]
flags: [generated]
---*/


const Subclass = class extends Set {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Set);
