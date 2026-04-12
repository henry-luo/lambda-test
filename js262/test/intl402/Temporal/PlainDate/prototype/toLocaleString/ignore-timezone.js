

/*---
esid: sec-temporal.plaindate.prototype.tolocalestring
description: Temporal.PlainDate should be interpreted and formatted as wall-clock time
features: [Temporal]
---*/


const instance = Temporal.PlainDate.from({ year: 2011, month: 12, day: 30 });

const result = instance.toLocaleString('en-US', { timeZone: 'Pacific/Apia' });
assert(result.includes('30') && !result.includes('31'));

assert.sameValue(
  instance.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  instance.toLocaleString('en-US')
);

assert.sameValue(
  instance.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  instance.toLocaleString('en-US', { timeZone: 'UTC' })
);
