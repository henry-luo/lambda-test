

/*---
description: new SubTypeError() instanceof TypeError (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends TypeError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof TypeError);
