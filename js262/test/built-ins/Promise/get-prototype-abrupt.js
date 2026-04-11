

/*---
esid: sec-promise-executor
description: >
  Abrupt completion from "prototype" property access
info: |
  25.6.3.1 Promise ( executor )

  [...]
  3. Let promise be ? OrdinaryCreateFromConstructor(NewTarget, "%PromisePrototype%", « [[PromiseState]], [[PromiseResult]], [[PromiseFulfillReactions]], [[PromiseRejectReactions]], [[PromiseIsHandled]] »).

  9.1.13 OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )

  [...]
  2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).

  9.1.14 GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  [...]
  3. Let proto be ? Get(constructor, "prototype").
features: [Reflect, Reflect.construct]
---*/

var bound = (function() {}).bind();
Object.defineProperty(bound, 'prototype', {
  get: function() {
    throw new Test262Error();
  },
});

assert.throws(Test262Error, function() {
  Reflect.construct(Promise, [function() {}], bound);
});
