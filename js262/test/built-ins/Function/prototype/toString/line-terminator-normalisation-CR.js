

/*---
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
description: Function.prototype.toString line terminator normalisation (CR)
info: |
  Function.prototype.toString should not normalise line terminator sequences to Line Feed characters.
  This file uses Carriage Return characters as line terminators.
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


assertToStringOrNativeFunction(f, "function\r// a\rf\r// b\r(\r// c\rx\r// d\r,\r// e\ry\r// f\r)\r// g\r{\r// h\r;\r// i\r;\r// j\r}");
