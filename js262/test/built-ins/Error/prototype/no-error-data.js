

/*---
esid: sec-properties-of-the-error-prototype-object
description: >
  The Error Prototype object does not have a [[ErrorData]] internal slot.
info: |
  Properties of the Error Prototype Object

  The Error prototype object:
  [...]
  * is not an Error instance and does not have an [[ErrorData]] internal slot.

  Object.prototype.toString ( )

  [...]
  8. Else if O has an [[ErrorData]] internal slot, let builtinTag be "Error".
  [...]
  15. Let tag be ? Get(O, @@toStringTag).
  16. If Type(tag) is not String, set tag to builtinTag.
  17. Return the string-concatenation of "[object ", tag, and "]".
features: [Symbol.toStringTag]
---*/


Object.defineProperty(Error.prototype, Symbol.toStringTag, {
  value: null,
});

assert.sameValue(
  Object.prototype.toString.call(Error.prototype),
  "[object Object]"
);
