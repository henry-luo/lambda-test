

/*---
description: new SubMap() instanceof Map (Subclass instanceof Heritage)
features: [Map]
flags: [generated]
---*/


class Subclass extends Map {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Map);
