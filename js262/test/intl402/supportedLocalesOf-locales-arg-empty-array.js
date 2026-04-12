

/*---
es5id: 9.2.6_4
description: >
    Tests that LookupSupportedLocales returns an empty list when
    given an empty list.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    
    ["lookup", "best fit"].forEach(function (matcher) {
        var supported = Constructor.supportedLocalesOf([], {localeMatcher: matcher});
        assert.sameValue(supported.length, 0, "SupportedLocales with matcher " + matcher + " returned a non-empty list for an empty list.");
    });
});
