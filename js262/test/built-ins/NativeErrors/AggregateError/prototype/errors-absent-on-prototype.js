

/*---
esid: sec-properties-of-the-aggregate-error-prototype-objects
description: >
  The AggregateError prototype object isn't an AggregateError instance.
info: |
  Properties of the AggregateError Prototype Object

  The AggregateError prototype object:
    ...
    - is not an Error instance or an AggregateError instance and does not have an
      [[ErrorData]] internal slot.
    ...
features: [AggregateError]
---*/

assert.sameValue(AggregateError.prototype.hasOwnProperty("errors"), false);
