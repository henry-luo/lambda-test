

/*---
es5id: 6.4_b
description: Tests that invalid time zone names are not accepted.
author: Norbert Lindenberg
---*/

var invalidTimeZoneNames = [
    "",
    "MEZ", 
    "Pacific Time", 
    "cnsha", 
    "invalid", 
    "Europe/İstanbul", 
    "asıa/baku", 
    "europe/brußels"  
];

invalidTimeZoneNames.forEach(function (name) {
    
    assert.throws(RangeError, function() {
        var format = new Intl.DateTimeFormat(["de-de"], {timeZone: name});
    }, "Invalid time zone name " + name + " was not rejected.");
});
