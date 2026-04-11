

/*---
esid: sec-sharedarraybuffer-length
description: Default [[Prototype]] value derived from realm of the newTarget
info: |
    [...]
    3. Return ? AllocateSharedArrayBuffer(NewTarget, byteLength).

    9.1.14 GetPrototypeFromConstructor

    [...]
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    [...]
features: [SharedArrayBuffer, cross-realm, Reflect]
---*/

var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;

var o = Reflect.construct(SharedArrayBuffer, [], C);

assert.sameValue(Object.getPrototypeOf(o), other.SharedArrayBuffer.prototype);
