

/*---
esid: sec-temporal.plaintime.prototype.tostring
description: TypeError thrown when a primitive is passed as the options argument
features: [Temporal]
---*/

const instance = Temporal.PlainTime.from("12:56:32");
const values = [null, true, "hello", Symbol("foo"), 1, 1n];

for (const badOptions of values) {
  assert.throws(TypeError, () => instance.toString(badOptions));
}
