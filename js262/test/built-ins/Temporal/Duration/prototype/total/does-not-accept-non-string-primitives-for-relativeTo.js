

/*---
esid: sec-temporal.duration.prototype.total
description: Does not accept non-string primitives for relativeTo.
features: [Temporal]
---*/

const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 2, 31, 0);

[
  20200101,
  20200101n,
  null,
  true,
].forEach(relativeTo => {
  assert.throws(
    TypeError, () => d.total({ unit: "months", relativeTo})
  );
});
