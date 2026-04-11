

/*---
esid: sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation
description: Function.prototype.toString on a generator method
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
let f = { *  f  (  )  {  } }.f;
let g = { *  [  "g"  ]  (  )  {  } }.g;
let h = { *  [  x  ]  (  )  {  } }.h;

assertToStringOrNativeFunction(f, "* /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }");
assertToStringOrNativeFunction(g, "* /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
assertToStringOrNativeFunction(h, "* /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
