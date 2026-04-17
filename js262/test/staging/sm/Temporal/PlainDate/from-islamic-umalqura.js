

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - Temporal
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() => {
  let date = Temporal.PlainDate.from({
    calendar: "islamic-umalqura",
    year: -6823,
    monthCode: "M01",
    day: 1,
  });
  
}, RangeError);

