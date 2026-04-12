

/*---
es5id: 12.3.2_TLT_2
description: >
    Tests that the behavior of a Record is not affected by
    adversarial  changes to Object.prototype.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintProperties(["weekday", "era", "year", "month", "day", "hour", "minute", "second", "inDST"]);

var format = new Intl.DateTimeFormat();
var time = format.format();
