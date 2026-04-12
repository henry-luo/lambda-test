

/*---
es5id: 10.3.2_CS_c_NN
description: >
    Tests that the compare function supports phonebook sorting if it
    says it does.  This test is not normative.
author: Norbert Lindenberg
includes: [compareArray.js]
---*/


var locales = ["de-DE-u-co-phonebk", "de-u-co-phonebk"];
var collator = new Intl.Collator(locales, {localeMatcher: "lookup"});
if (locales.indexOf(collator.resolvedOptions().locale) !== -1) {
    var a = ["A", "b", "Af", "Ab", "od", "off", "Ä", "ö"];
    a.sort(collator.compare);
    var expected = ["A", "Ab", "Ä", "Af", "b", "od", "ö", "off"];
    assert.compareArray(a, expected);
}
