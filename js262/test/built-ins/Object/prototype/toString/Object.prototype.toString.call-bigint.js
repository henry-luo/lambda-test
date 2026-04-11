

/*---
esid: sec-object.prototype.tostring
description: BigInt.prototype[@@toStringTag] is BigInt
info: |
    Let tag be ? Get(O, @@toStringTag).
features: [BigInt]
---*/
assert.sameValue(Object.prototype.toString.call(3n), "[object BigInt]");
assert.sameValue(Object.prototype.toString.call(Object(3n)), "[object BigInt]");
assert.sameValue(Object.prototype.toString.call(BigInt(3n)), "[object BigInt]");
assert.sameValue(Object.prototype.toString.call(Object(BigInt(3n))), "[object BigInt]");
