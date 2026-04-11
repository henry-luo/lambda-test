

/*---
description: new SubTypeError() instanceof TypeError (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends TypeError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof TypeError);
