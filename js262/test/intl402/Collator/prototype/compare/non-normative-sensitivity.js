

/*---
es5id: 10.3.2_CS_d_NN
description: >
    Tests that the compare function supports different sensitivity
    settings.  This test is not normative.
author: Norbert Lindenberg
includes: [compareArray.js]
---*/


var locales = ["de", "en", "es", "it"];
locales = Intl.Collator.supportedLocalesOf(locales, {localeMatcher: "lookup"});
locales.forEach(function (locale) {
    var target = "Aa";
    var input = ["Aa", "bA", "E", "b", "aA", "fC", "áÁ", "Aã"];
    var expected = {
        "base": ["Aa", "aA", "áÁ", "Aã"],
        "accent": ["Aa", "aA"],
        "case": ["Aa", "Aã"],
        "variant": ["Aa"]
    };
    Object.getOwnPropertyNames(expected).forEach(function (sensitivity) {
        var collator = new Intl.Collator([locale], {usage: "search",
                sensitivity: sensitivity, localeMatcher: "lookup"});
        var matches = input.filter(function (v) {
            return collator.compare(v, target) === 0;
        });
        assert.compareArray(matches, expected[sensitivity]);
    });
});
