

/*---
esid: sec-Intl.Locale.prototype.minimize
description: >
    The "Remove Likely Subtags" algorithm adds likely subtags before processing the locale.
info: |
    Intl.Locale.prototype.minimize ()
    3. Let minimal be the result of the Remove Likely Subtags algorithm applied to loc.[[Locale]].
       If an error is signaled, set minimal to loc.[[Locale]].

    UTS 35, §4.3 Likely Subtags
    Remove Likely Subtags

    1. First get max = AddLikelySubtags(inputLocale). If an error is signaled, return it.
    2. ...
features: [Intl.Locale]
---*/

var testDataMinimal = {
    
    "und": "en",
    "und-Thai": "th",
    "und-419": "es-419",
    "und-150": "en-150",
    "und-AT": "de-AT",

    
    "aae-Latn-IT": "aae",
    "aae-Thai-CO": "aae-Thai-CO",

    
    "und-CW": "pap",
    "und-US": "en",
    "zh-Hant": "zh-TW",
    "zh-Hani": "zh-Hani",
};

for (const [tag, minimal] of Object.entries(testDataMinimal)) {
    
    assert.sameValue(new Intl.Locale(minimal).minimize().toString(), minimal,
                     `"${minimal}" should be minimal`);

    
    assert.sameValue(new Intl.Locale(tag).minimize().toString(), minimal,
                     `"${tag}".minimize() should be "${minimal}"`);
}
