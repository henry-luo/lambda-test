

/*---
info: SPACE (U+0020) may occur within strings
es5id: 7.2_A2.4_T1
description: Use SPACE(\u0020)
---*/


if (eval("'\u0020str\u0020ing\u0020'") !== "\u0020str\u0020ing\u0020") {
  throw new Test262Error('#1: eval("\'\\u0020str\\u0020ing\\u0020\'") === "\\u0020str\\u0020ing\\u0020"');
}


if (eval("' str ing '") !== " str ing ") {
  throw new Test262Error('#2: eval("\' str ing \'") === " str ing "');
}
