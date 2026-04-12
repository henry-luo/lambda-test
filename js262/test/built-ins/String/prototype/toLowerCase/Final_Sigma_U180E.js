

/*---
esid: sec-string.prototype.tolowercase
description: >
    Check if String.prototype.toLowerCase supports conditional mappings defined in SpecialCasings,
    test Final_Sigma context with Mongolian Vowel Separator
info: |
    The result must be derived according to the locale-insensitive case mappings in the Unicode Character
    Database (this explicitly includes not only the UnicodeData.txt file, but also all locale-insensitive
    mappings in the SpecialCasings.txt file that accompanies it).
features: [u180e]
---*/


assert.sameValue(
  "A\u180E\u03A3".toLowerCase(),
  "a\u180E\u03C2",
  "Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR"
);
assert.sameValue(
  "A\u180E\u03A3B".toLowerCase(),
  "a\u180E\u03C3b",
  "Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR, followed by LATIN CAPITAL LETTER B"
);


assert.sameValue(
  "A\u03A3\u180E".toLowerCase(),
  "a\u03C2\u180E",
  "Sigma preceded by LATIN CAPITAL LETTER A, followed by MONGOLIAN VOWEL SEPARATOR"
);
assert.sameValue(
  "A\u03A3\u180EB".toLowerCase(),
  "a\u03C3\u180Eb",
  "Sigma preceded by LATIN CAPITAL LETTER A, followed by MONGOLIAN VOWEL SEPARATOR, LATIN CAPITAL LETTER B"
);


assert.sameValue(
  "A\u180E\u03A3\u180E".toLowerCase(),
  "a\u180E\u03C2\u180E",
  "Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR, followed by MONGOLIAN VOWEL SEPARATOR"
);
assert.sameValue(
  "A\u180E\u03A3\u180EB".toLowerCase(),
  "a\u180E\u03C3\u180Eb",
  "Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR, followed by MONGOLIAN VOWEL SEPARATOR, LATIN CAPITAL LETTER B"
);
