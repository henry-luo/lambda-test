

/*---
esid: sec-literals-string-literals
description: >
  U+2029 PARAGRAPH SEPARATOR can appear in string literals.
info: |
  11.8.4 String Literals

  All code points may appear literally in a string literal except for the
  closing quote code points, U+005C (REVERSE SOLIDUS), U+000D (CARRIAGE RETURN),
  and U+000A (LINE FEED).
features: [json-superset]
---*/


assert.sameValue(" ", "\u2029");
