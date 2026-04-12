

/*---
es5id: 6.2.2_a
description: Tests that structurally valid language tags are accepted.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

var validLanguageTags = [
    "de", 
    "de-DE", 
    "DE-de", 
    "cmn", 
    "cmn-Hans", 
    "CMN-hANS", 
    "cmn-hans-cn", 
    "es-419", 
    "es-419-u-nu-latn-cu-bob", 
    "cmn-hans-cn-t-ca-u-ca-x-t-u", 
    "de-gregory-u-ca-gregory", 
    "aa-a-foo-x-a-foo-bar", 
];

testWithIntlConstructors(function (Constructor) {
    validLanguageTags.forEach(function (tag) {
        
        var obj = new Constructor([tag]);
    });
});
