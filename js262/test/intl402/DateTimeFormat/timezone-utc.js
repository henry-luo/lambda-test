

/*---
es5id: 6.4_a
description: Tests that valid time zone names are accepted.
author: Norbert Lindenberg
---*/

var validTimeZoneNames = [
    "UTC",
    "utc" 
];

validTimeZoneNames.forEach(function (name) {
    
    var format = new Intl.DateTimeFormat(["de-de"], {timeZone: name});
    assert.sameValue(format.resolvedOptions().timeZone, name.toUpperCase(), "Time zone name " + name + " was not correctly accepted.");
});
