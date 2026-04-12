

/*---
description: new SubReferenceError() instanceof ReferenceError (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends ReferenceError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof ReferenceError);
