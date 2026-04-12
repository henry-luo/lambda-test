

/*---
esid: sec-temporal.now.instant
description: >
  Temporal.Now.instant returns an Instant describing the current moment in time
  (as corroborated by `Date.now`)
features: [BigInt, Temporal]
---*/
var nowBefore = Date.now();
var seconds = Number(Temporal.Now.instant().epochNanoseconds / 1000000n);
var nowAfter = Date.now();
assert(seconds >= nowBefore, 'The result of evaluating (seconds >= nowBefore) is expected to be true');
assert(seconds <= nowAfter, 'The result of evaluating (seconds <= nowAfter) is expected to be true');
