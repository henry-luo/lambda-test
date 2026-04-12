

/*---
esid: sec-setnfdigitoptions
description: >
    The maximum and minimum fraction digits properties should be read from
    the options bag exactly once from the NumberFormat constructor.
info: Regression test for https://bugs.chromium.org/p/v8/issues/detail?id=6015
---*/

var calls = [];

new Intl.NumberFormat("en", { get minimumFractionDigits() { calls.push('minimumFractionDigits') },
                              get maximumFractionDigits() { calls.push('maximumFractionDigits') } });
assert.sameValue(calls.length, 2);
assert.sameValue(calls[0], 'minimumFractionDigits');
assert.sameValue(calls[1], 'maximumFractionDigits');
