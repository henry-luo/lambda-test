

/*---
es5id: 6.2.2_c
description: >
    Tests that language tags with invalid subtag sequences are not
    accepted.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

var invalidLanguageTags = getInvalidLanguageTags();

testWithIntlConstructors(function (Constructor) {
    invalidLanguageTags.forEach(function (tag) {
        
        assert.throws(RangeError, function() {
            var obj = new Constructor([tag]);
        }, "Invalid language tag " + tag + " was not rejected.");
    });
});
