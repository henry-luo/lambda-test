

/*---
es5id: 11.1.1_7
description: Tests that the option localeMatcher is processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testOption(Intl.NumberFormat, "localeMatcher", "string", ["lookup", "best fit"], "best fit", {noReturn: true});
