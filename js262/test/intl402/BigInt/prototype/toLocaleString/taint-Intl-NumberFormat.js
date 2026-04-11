

/*---
esid: sec-bigint.prototype.tolocalestring
description: >
    Tests that Number.prototype.toLocaleString uses the standard
    built-in Intl.NumberFormat constructor.
includes: [testIntl.js]
features: [BigInt]
---*/

taintDataProperty(Intl, "NumberFormat");
0n.toLocaleString();
