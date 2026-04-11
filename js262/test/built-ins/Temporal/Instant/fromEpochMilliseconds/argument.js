

/*---
esid: sec-temporal.instant.fromepochmilliseconds
description: >
  TypeError thrown if input is of wrong primitive type.
info: |
  Temporal.Instant.fromEpochMilliseconds ( epochMilliseconds )

  1. Set epochMilliseconds to ? ToNumber(epochMilliseconds).
  ...
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.Instant.fromEpochMilliseconds(42n), "number");
assert.throws(TypeError, () => Temporal.Instant.fromEpochMilliseconds(Symbol()), "symbol");
