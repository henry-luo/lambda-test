

/*---
description: >
    Check if String.prototype.toLocaleLowerCase supports language-sensitive mappings defined in SpecialCasings (Turkish)
info: |
    The result must be derived according to the case mappings in the Unicode character database (this explicitly
    includes not only the UnicodeData.txt file, but also the SpecialCasings.txt file that accompanies it).
es5id: 15.5.4.16
es6id: 21.1.3.20
---*/


assert.sameValue(
  "\u0130".toLocaleLowerCase("tr"),
  "i",
  "LATIN CAPITAL LETTER I WITH DOT ABOVE"
);


assert.sameValue(
  "I\u0307".toLocaleLowerCase("tr"),
  "i",
  "LATIN CAPITAL LETTER I followed by COMBINING DOT ABOVE"
);
assert.sameValue(
  "I\u0323\u0307".toLocaleLowerCase("tr"),
  "i\u0323",
  "LATIN CAPITAL LETTER I followed by COMBINING DOT BELOW, COMBINING DOT ABOVE"
);
assert.sameValue(
  "I\uD800\uDDFD\u0307".toLocaleLowerCase("tr"),
  "i\uD800\uDDFD",
  "LATIN CAPITAL LETTER I followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, COMBINING DOT ABOVE"
);


assert.sameValue(
  "IA\u0307".toLocaleLowerCase("tr"),
  "\u0131a\u0307",
  "LATIN CAPITAL LETTER I followed by LATIN CAPITAL LETTER A, COMBINING DOT ABOVE"
);


assert.sameValue(
  "I\u0300\u0307".toLocaleLowerCase("tr"),
  "\u0131\u0300\u0307",
  "LATIN CAPITAL LETTER I followed by COMBINING GRAVE ACCENT, COMBINING DOT ABOVE"
);
assert.sameValue(
  "I\uD834\uDD85\u0307".toLocaleLowerCase("tr"),
  "\u0131\uD834\uDD85\u0307",
  "LATIN CAPITAL LETTER I followed by MUSICAL SYMBOL COMBINING DOIT, COMBINING DOT ABOVE"
);


assert.sameValue(
  "I".toLocaleLowerCase("tr"),
  "\u0131",
  "LATIN CAPITAL LETTER I"
);


assert.sameValue(
  "i".toLocaleLowerCase("tr"),
  "i",
  "LATIN SMALL LETTER I"
);
assert.sameValue(
  "\u0131".toLocaleLowerCase("tr"),
  "\u0131",
  "LATIN SMALL LETTER DOTLESS I"
);
