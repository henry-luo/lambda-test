

/*---
description: new SubEvalError() instanceof EvalError (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends EvalError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof EvalError);
