

/*---
esid: sec-intl.locale
description: >
    Verifies treatment of specific structurally invalid tags.
info: |
    ApplyOptionsToTag( tag, options )
    2. If IsStructurallyValidLanguageTag(tag) is false, throw a RangeError exception.
features: [Intl.Locale]
---*/

const invalidLanguageTags = [
  
  "da-u",
  "da-u-",
  "da-u--",
  "da-u-t-latn",
  "da-u-x-priv",

  
  "da-u-ca-gregory-u-ca-buddhist"
];

for (const langtag of invalidLanguageTags) {
  assert.throws(RangeError, function() {
    new Intl.Locale(langtag)
  },
  `new Intl.Locale("${langtag}") throws RangeError`);
}
