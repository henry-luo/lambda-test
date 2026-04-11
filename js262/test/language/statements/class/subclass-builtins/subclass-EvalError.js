

/*---
description: new SubEvalError() instanceof EvalError (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends EvalError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof EvalError);
