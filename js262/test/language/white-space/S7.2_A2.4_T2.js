

/*---
info: SPACE (U+0020) may occur within strings
es5id: 7.2_A2.4_T2
description: Use real SPACE
---*/


if (" str ing " !== "\u0020str\u0020ing\u0020") {
  throw new Test262Error('#1: " str ing " === "\\u0020str\\u0020ing\\u0020"');
}
