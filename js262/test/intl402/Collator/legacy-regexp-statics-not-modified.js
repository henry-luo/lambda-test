

/*---
es5id: 10.1.1_a
description: >
    Tests that constructing a Collator doesn't create or modify
    unwanted properties on the RegExp constructor.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testForUnwantedRegExpChanges(function () {
    new Intl.Collator("de-DE-u-co-phonebk");
});
