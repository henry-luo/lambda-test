

/*---
description: new SubAggregateError() instanceof AggregateError (Subclass instanceof Heritage)
features: [AggregateError]
flags: [generated]
---*/


const Subclass = class extends AggregateError {}

const sub = new Subclass([]);
assert(sub instanceof Subclass);
assert(sub instanceof AggregateError);
