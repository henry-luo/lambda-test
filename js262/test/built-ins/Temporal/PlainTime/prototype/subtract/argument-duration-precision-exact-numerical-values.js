

/*---
esid: sec-temporal.plaintime.prototype.subtract
description: >
    Duration-like argument performs the range check with minimal floating point
    precision loss
features: [Temporal]
---*/


const instance = new Temporal.PlainTime();

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
  instance.subtract(arg);  
}
