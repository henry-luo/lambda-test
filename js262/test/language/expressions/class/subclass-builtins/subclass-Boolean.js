

/*---
description: new SubBoolean() instanceof Boolean (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends Boolean {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Boolean);
