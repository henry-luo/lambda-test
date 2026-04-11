

/*---
info: HORIZONTAL TAB (U+0009) may occur within strings
es5id: 7.2_A2.1_T1
description: Use HORIZONTAL TAB(\u0009 and \t)
---*/


if (eval("'\u0009str\u0009ing\u0009'") !== "\u0009str\u0009ing\u0009") {
  throw new Test262Error('#1: eval("\'\\u0009str\\u0009ing\\u0009\'") === "\\u0009str\\u0009ing\\u0009"');
}


if (eval("'\tstr\ting\t'") !== "\tstr\ting\t") {
  throw new Test262Error('#2: eval("\'\\tstr\\ting\\t\'") === "\\tstr\\ting\\t"');
}
