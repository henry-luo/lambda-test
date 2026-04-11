

/*---
es5id: 6.3.1_b
description: Tests that invalid currency codes are not accepted.
author: Norbert Lindenberg
---*/

var invalidCurrencyCodes = [
    "",
    "€",
    "$",
    "SFr.",
    "DM",
    "KR₩",
    "702",
    "ßP",
    "ınr"
];

invalidCurrencyCodes.forEach(function (code) {
    
    assert.throws(RangeError, function() {
        var format = new Intl.NumberFormat(["de-de"], {style: "currency", currency: code});
    }, "Invalid currency code '" + code + "' was not rejected.");
});
