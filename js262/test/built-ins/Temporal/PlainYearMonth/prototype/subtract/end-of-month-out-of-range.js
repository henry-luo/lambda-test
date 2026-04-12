

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: RangeError thrown when subtracting positive duration and end of month is out of range
features: [Temporal]
info: |
  AddDurationToOrSubtractDurationFromPlainYearMonth:
  12. If _sign_ &lt; 0, then
    a. Let _oneMonthDuration_ be ! CreateTemporalDuration(0, 1, 0, 0, 0, 0, 0, 0, 0, 0).
    b. Let _nextMonth_ be ? CalendarDateAdd(_calendar_, _intermediateDate_, _oneMonthDuration_, *undefined*, _dateAdd_).
    c. Let _endOfMonthISO_ be ! AddISODate(_nextMonth_.[[ISOYear]], _nextMonth_.[[ISOMonth]], _nextMonth_.[[ISODay]], 0, 0, 0, -1, *"constrain"*).
    d. Let _endOfMonth_ be ? CreateTemporalDate(_endOfMonthISO_.[[Year]], _endOfMonthISO_.[[Month]], _endOfMonthISO_.[[Day]], _calendar_).
---*/


const duration = new Temporal.Duration(0, 0, 0, 1);


assert.throws(RangeError, () => new Temporal.PlainYearMonth(275760, 9).subtract(duration), "Addition of 1 month to receiver out of range");
