

/*---
esid: sec-intl.DurationFormat.prototype.resolvedOptions
description: basic tests internal slot initialization and call receiver errors
info: |
  Intl.DurationFormat.prototype.resolvedOptions ( )
  (...)
    2. Perform ? RequireInternalSlot(df, [[InitializedDurationFormat]]).
features: [Intl.DurationFormat]
---*/

const df = new Intl.DurationFormat();


let f = df['resolvedOptions'];

assert.sameValue(typeof f, 'function');
assert.throws(TypeError, () => { f() });

