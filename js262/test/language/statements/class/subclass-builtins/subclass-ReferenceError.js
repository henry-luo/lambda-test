

/*---
description: new SubReferenceError() instanceof ReferenceError (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends ReferenceError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof ReferenceError);
