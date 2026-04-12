

/*---
info: VERTICAL TAB (U+000B) may occur within strings
es5id: 7.2_A2.2_T2
description: Use real VERTICAL TAB
---*/


if ("string" !== "\u000Bstr\u000Bing\u000B") {
  throw new Test262Error('#1: "string" === "\\u000Bstr\\u000Bing\\u000B"');
}
