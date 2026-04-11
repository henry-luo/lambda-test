

/*---
esid: sec-partitiondatetimepattern
description: >
  Temporal dates outside the TimeClip range are correctly formatted when the
  locale uses non-Latin numerals (e.g., Arabic-Indic digits).
info: |
  When a Temporal plain object is outside the range representable by a legacy
  Date and the locale's numbering system uses non-Latin digits, the
  implementation must re-format the adjusted day value in the correct numeral
  system.
features: [Temporal]
locale: [ar-EG]
---*/


var dtf = new Intl.DateTimeFormat("ar-EG", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  calendar: "iso8601"
});


var maxDate = new Temporal.PlainDate(275760, 9, 13);
var result = dtf.format(maxDate);


assert(result.includes("\u0661\u0663"), "max date should include day 13 in Arabic-Indic digits, got: " + result);

assert(result.includes("\u0669"), "max date should include month 9 in Arabic-Indic digit, got: " + result);


var minDate = new Temporal.PlainDate(-271821, 4, 19);
var minResult = dtf.format(minDate);


assert(minResult.includes("\u0661\u0669"), "min date should include day 19 in Arabic-Indic digits, got: " + minResult);
