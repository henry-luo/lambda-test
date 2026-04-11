

/*---
description: new SubArrayBuffer() instanceof ArrayBuffer (Subclass instanceof Heritage)
features: [TypedArray, ArrayBuffer]
flags: [generated]
---*/


const Subclass = class extends ArrayBuffer {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof ArrayBuffer);
