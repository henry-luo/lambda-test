

/*---
esid: sec-intl.locale
description: >
    Verifies getters with grandfathered tags.
info: |
    get Intl.Locale.prototype.baseName
    5. Return the substring of locale corresponding to the
       language ["-" script] ["-" region] *("-" variant)
       subsequence of the  unicode_language_id grammar.

    get Intl.Locale.prototype.language
    5. Return the substring of locale corresponding to the
       unicode_language_subtag production.

    get Intl.Locale.prototype.script
    6. Return the substring of locale corresponding to the
       unicode_script_subtag production.

    get Intl.Locale.prototype.region
    6. Return the substring of locale corresponding to the unicode_region_subtag
       production.
features: [Intl.Locale]
---*/


var loc = new Intl.Locale("cel-gaulish");
assert.sameValue(loc.baseName, "xtg");
assert.sameValue(loc.language, "xtg");
assert.sameValue(loc.script, undefined);
assert.sameValue(loc.region, undefined);


assert.throws(RangeError, () => new Intl.Locale("zh-min"));

assert.throws(RangeError, () => new Intl.Locale("i-default"));

