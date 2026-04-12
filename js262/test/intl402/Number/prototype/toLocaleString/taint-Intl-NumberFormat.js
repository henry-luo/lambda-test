

/*---
es5id: 13.2.1_4_2
description: >
    Tests that Number.prototype.toLocaleString uses the standard
    built-in Intl.NumberFormat constructor.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintDataProperty(Intl, "NumberFormat");
(0.0).toLocaleString();
