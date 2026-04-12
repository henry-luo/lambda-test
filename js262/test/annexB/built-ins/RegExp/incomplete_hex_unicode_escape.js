

/*---
description: An incomplete HexEscape or UnicodeEscape should be treated as an Identity Escape
info: |
    An incomplete HexEscape (e.g. /\x/) or UnicodeEscape (/\u/) should fall
    through to IdentityEscape
esid: prod-AtomEscape
---*/


assert(/\x/.test("x"), "/\\x/");
assert(/\xa/.test("xa"), "/\\xa/");


assert(/\u/.test("u"), "/\\u/");
assert(/\ua/.test("ua"), "/\\ua/");
