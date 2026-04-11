

/*---
description: new SubRangeError() instanceof RangeError (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends RangeError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof RangeError);
