

/*---
es5id: 10.1.1_11
description: Tests that the option localeMatcher is processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testOption(Intl.Collator, "localeMatcher", "string", ["lookup", "best fit"], "best fit", {noReturn: true});
