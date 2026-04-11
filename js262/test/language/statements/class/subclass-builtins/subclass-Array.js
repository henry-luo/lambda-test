

/*---
description: new SubArray() instanceof Array (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Array);
