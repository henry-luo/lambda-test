

/*---
esid: sec-temporal.duration.from
description: >
    Duration-like argument performs the range check with minimal floating point
    precision loss
features: [Temporal]
---*/


const cases = [
  [
    {
      milliseconds: 4503599627370497_000,  
      microseconds: 4503599627370495_000000,  
    },
    
    
    "case where floating point inaccuracy brings total below limit, positive"
  ],
  [
    {
      milliseconds: -4503599627370497_000,
      microseconds: -4503599627370495_000000,
    },
    "case where floating point inaccuracy brings total below limit, negative"
  ],
];

for (const [arg, descr] of cases) {
  assert.sameValue(Temporal.Duration.compare(arg, arg), 0, descr);
}
