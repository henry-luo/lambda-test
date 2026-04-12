

/*---
es5id: 6.3.1_a
description: Tests that well-formed currency codes are accepted.
author: Norbert Lindenberg
---*/

var wellFormedCurrencyCodes = [
    "BOB",
    "EUR",
    "usd", 
    "XdR",
    "xTs"
];

wellFormedCurrencyCodes.forEach(function (code) {
    
    var format = new Intl.NumberFormat(["de-de"], {style: "currency", currency: code});
    assert.sameValue(format.resolvedOptions().currency, code.toUpperCase(), "Currency " + code + " was not correctly accepted.");
});
