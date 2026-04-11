

/*---
description: new SubNumber() instanceof Number (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends Number {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Number);
