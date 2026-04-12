

/*---
description: >
    Behavior if error is thrown when accessing `Symbol.toStringTag` property
es6id: 19.1.3.6
info: |
    16. Let tag be Get (O, @@toStringTag).
    17. ReturnIfAbrupt(tag).
features: [Symbol.toStringTag]
---*/

var poisonedToStringTag = Object.defineProperty({}, Symbol.toStringTag, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  poisonedToStringTag.toString();
});
