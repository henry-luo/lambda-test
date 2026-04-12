

/*---
description: new SubAggregateError() instanceof AggregateError (Subclass instanceof Heritage)
features: [AggregateError]
flags: [generated]
---*/


class Subclass extends AggregateError {}

const sub = new Subclass([]);
assert(sub instanceof Subclass);
assert(sub instanceof AggregateError);
