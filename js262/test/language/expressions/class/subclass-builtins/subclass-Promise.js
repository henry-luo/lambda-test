

/*---
description: new SubPromise() instanceof Promise (Subclass instanceof Heritage)
features: [Promise]
flags: [generated]
---*/


const Subclass = class extends Promise {}

const sub = new Subclass(() => {});
assert(sub instanceof Subclass);
assert(sub instanceof Promise);
