

/*---
description: new SubString() instanceof String (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends String {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof String);
