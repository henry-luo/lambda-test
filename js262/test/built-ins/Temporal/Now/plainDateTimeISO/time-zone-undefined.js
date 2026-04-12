

/*---
esid: sec-temporal.now.plaindatetimeiso
description: Functions when time zone argument is omitted
features: [Temporal]
---*/

const resultExplicit = Temporal.Now.plainDateTimeISO(undefined);
assert(
  resultExplicit instanceof Temporal.PlainDateTime,
  'The result of evaluating (resultExplicit instanceof Temporal.PlainDateTime) is expected to be true'
);

const resultImplicit = Temporal.Now.plainDateTimeISO();
assert(
  resultImplicit instanceof Temporal.PlainDateTime,
  'The result of evaluating (resultImplicit instanceof Temporal.PlainDateTime) is expected to be true'
);
