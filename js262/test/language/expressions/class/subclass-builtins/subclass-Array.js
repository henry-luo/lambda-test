

/*---
description: new SubArray() instanceof Array (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Array);
