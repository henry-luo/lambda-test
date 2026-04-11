

/*---
esid: sec-Intl.DurationFormat
description: Checks the order of option read.
features: [Intl.DurationFormat]
includes: [compareArray.js]
---*/

let optionKeys =  Object.keys((new Intl.DurationFormat()).resolvedOptions());
let opt = {};
let readKeys = new Array();


optionKeys.forEach((property) =>
    Object.defineProperty(opt, property, {
        get() {
            readKeys[readKeys.length] = property;
            return undefined;
        },
    }));
let p = new Intl.DurationFormat(undefined, opt);
assert.compareArray(
    readKeys,
    ['numberingSystem',
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
