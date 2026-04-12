

/*---
description: new SubSyntaxError() instanceof SyntaxError (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends SyntaxError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof SyntaxError);
