

/*---
description: new SubRegExp() instanceof RegExp (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends RegExp {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof RegExp);
