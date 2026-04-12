

/*---
description: new SubObject() instanceof Object (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends Object {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Object);
