

/*---
description: new SubSharedArrayBuffer() instanceof SharedArrayBuffer (Subclass instanceof Heritage)
features: [SharedArrayBuffer]
flags: [generated]
---*/


class Subclass extends SharedArrayBuffer {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof SharedArrayBuffer);
