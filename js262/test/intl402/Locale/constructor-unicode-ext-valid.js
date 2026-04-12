

/*---
esid: sec-intl.locale
description: >
    Verifies canonicalization of specific tags.
info: |
    ApplyOptionsToTag( tag, options )
    10. Return CanonicalizeLanguageTag(tag).
features: [Intl.Locale]
---*/

const validLanguageTags = {
    
    "da-u-ca-gregory-ca-buddhist": "da-u-ca-gregory",

    
    "zh-u-nu-hans-ca-chinese": "zh-u-ca-chinese-nu-hans",
    "zh-u-ca-chinese-nu-hans": "zh-u-ca-chinese-nu-hans",

    
    "de-u-cu-eur-nu-latn": "de-u-cu-eur-nu-latn",
    "de-u-nu-latn-cu-eur": "de-u-cu-eur-nu-latn",

    
    "pt-u-attr-ca-gregory": "pt-u-attr-ca-gregory",
    "pt-u-attr1-attr2-ca-gregory": "pt-u-attr1-attr2-ca-gregory",
    "pt-u-attr2-attr1-ca-gregory": "pt-u-attr1-attr2-ca-gregory",
};

for (const [langtag, canonical] of Object.entries(validLanguageTags)) {
    assert.sameValue(
      new Intl.Locale(langtag).toString(),
      canonical,
      `new Intl.Locale("${langtag}").toString() returns "${canonical}"`
    );
}
