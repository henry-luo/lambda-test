

/*---
info: Multi line comment can contain VERTICAL TAB (U+000B)
es5id: 7.2_A4.2_T1
description: Use VERTICAL TAB(\u000B)
---*/


eval("/*\u000B multi line \u000B comment \u000B*/");


var x = 0;
eval("/*\u000B multi line \u000B comment \u000B x = 1;*/");
if (x !== 0) {
  throw new Test262Error('#1: var x = 0; eval("/*\\u000B multi line \\u000B comment \\u000B x = 1;*/"); x === 0. Actual: ' + (x));
}
