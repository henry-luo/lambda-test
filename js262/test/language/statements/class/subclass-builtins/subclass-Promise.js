

/*---
description: new SubPromise() instanceof Promise (Subclass instanceof Heritage)
features: [Promise]
flags: [generated]
---*/


class Subclass extends Promise {}

const sub = new Subclass(() => {});
assert(sub instanceof Subclass);
assert(sub instanceof Promise);
