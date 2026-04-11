

/*---
description: new SubRegExp() instanceof RegExp (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends RegExp {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof RegExp);
