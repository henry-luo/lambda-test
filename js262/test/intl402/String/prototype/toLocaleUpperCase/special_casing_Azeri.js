

/*---
description: >
    Check if String.prototype.toLocaleUpperCase supports language-sensitive mappings defined in SpecialCasings (Azeri)
info: |
    The result must be derived according to the case mappings in the Unicode character database (this explicitly
    includes not only the UnicodeData.txt file, but also the SpecialCasings.txt file that accompanies it).
es5id: 15.5.4.16
es6id: 21.1.3.21
---*/


assert.sameValue(
  "\u0130".toLocaleUpperCase("az"),
  "\u0130",
  "LATIN CAPITAL LETTER I WITH DOT ABOVE"
);


assert.sameValue(
  "I".toLocaleUpperCase("az"),
  "I",
  "LATIN CAPITAL LETTER I"
);


assert.sameValue(
  "i".toLocaleUpperCase("az"),
  "\u0130",
  "LATIN SMALL LETTER I"
);


assert.sameValue(
  "\u0131".toLocaleUpperCase("az"),
  "I",
  "LATIN SMALL LETTER DOTLESS I"
);
