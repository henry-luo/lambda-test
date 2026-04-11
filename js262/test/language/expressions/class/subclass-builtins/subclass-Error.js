

/*---
description: new SubError() instanceof Error (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends Error {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Error);
