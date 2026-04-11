

/*---
esid: sec-Intl.DurationFormat.prototype.format
description: >
  Test format method with negative duration and "narrow" style
locale: [en]
includes: [testIntl.js]
features: [Intl.DurationFormat]
---*/

const style = "narrow";

const duration = {
  years: -1,
  months: -2,
  weeks: -3,
  days: -3,
  hours: -4,
  minutes: -5,
  seconds: -6,
  milliseconds: -7,
  microseconds: -8,
  nanoseconds: -9,
};

const df = new Intl.DurationFormat("en", {style});

const expected = formatDurationFormatPattern(df, duration);

assert.sameValue(
  df.format(duration),
  expected,
  `DurationFormat format output using ${style} style option`
);
