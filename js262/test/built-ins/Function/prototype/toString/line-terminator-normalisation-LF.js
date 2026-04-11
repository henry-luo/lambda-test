

/*---
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
description: Function.prototype.toString line terminator normalisation (LF)
info: |
  Function.prototype.toString should not normalise line terminator sequences to Line Feed characters.
  This file uses Line Feed characters as line terminators.
includes: [nativeFunctionMatcher.js]
---*/


function

f

(

x

,

y

)

{

;

;

}


assertToStringOrNativeFunction(f, "function\n// a\nf\n// b\n(\n// c\nx\n// d\n,\n// e\ny\n// f\n)\n// g\n{\n// h\n;\n// i\n;\n// j\n}");
