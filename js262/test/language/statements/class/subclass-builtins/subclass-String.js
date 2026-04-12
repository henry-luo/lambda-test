

/*---
description: new SubString() instanceof String (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends String {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof String);
