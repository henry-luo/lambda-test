

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
    
    
    "PT9007199254740991.975424S",
    "case where floating point inaccuracy brings total below limit, positive"
  ],
  [
    {
      milliseconds: -4503599627370497_000,
      microseconds: -4503599627370495_000000,
    },
    "-PT9007199254740991.975424S",
    "case where floating point inaccuracy brings total below limit, negative"
  ],
];

for (const [arg, string, descr] of cases) {
  const instance = Temporal.Duration.from(arg);  
  assert.sameValue(instance.toString(), string, descr);
}
