

/*---
esid: sec-intl.durationformat.prototype.resolvedoptions
description: order of property keys for the object returned by resolvedOptions()
features: [Intl.DurationFormat]
includes: [compareArray.js]
---*/

assert.compareArray(
    Object.keys((new Intl.DurationFormat()).resolvedOptions()),
    ['locale',
    'numberingSystem',
    'style',
    'years',
    'yearsDisplay',
    'months',
    'monthsDisplay',
    'weeks',
    'weeksDisplay',
    'days',
    'daysDisplay',
    'hours',
    'hoursDisplay',
    'minutes',
    'minutesDisplay',
    'seconds',
    'secondsDisplay',
    'milliseconds',
    'millisecondsDisplay',
    'microseconds',
    'microsecondsDisplay',
    'nanoseconds',
    'nanosecondsDisplay']);
