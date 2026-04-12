

/*---
description: new SubSyntaxError() instanceof SyntaxError (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends SyntaxError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof SyntaxError);
