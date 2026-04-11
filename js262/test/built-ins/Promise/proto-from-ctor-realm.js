

/*---
esid: sec-promise-executor
description: Default [[Prototype]] value derived from realm of the newTarget
info: |
    [...]
    3. Let promise be ? OrdinaryCreateFromConstructor(NewTarget,
       "%PromisePrototype%", « [[PromiseState]], [[PromiseResult]],
       [[PromiseFulfillReactions]], [[PromiseRejectReactions]],
       [[PromiseIsHandled]] »).
    [...]

    9.1.14 GetPrototypeFromConstructor

    [...]
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    [...]
features: [cross-realm, Reflect]
---*/

var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;

var o = Reflect.construct(Promise, [function() {}], C);

assert.sameValue(Object.getPrototypeOf(o), other.Promise.prototype);
