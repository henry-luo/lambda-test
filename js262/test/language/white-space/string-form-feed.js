

/*---
info: FORM FEED (U+000C) may occur within strings
es5id: 7.2_A2.3_T1
description: Use FORM FEED(\u000C and \f)
---*/


if (eval("'\u000Cstr\u000Cing\u000C'") !== "\u000Cstr\u000Cing\u000C") {
  throw new Test262Error('#1: eval("\'\\u000Cstr\\u000Cing\\u000C\'") === "\\u000Cstr\\u000Cing\\u000C"');
}


if (eval("'\fstr\fing\f'") !== "\fstr\fing\f") {
  throw new Test262Error('#2: eval("\'\\fstr\\fing\\f\'") === "\\fstr\\fing\\f"');
}
