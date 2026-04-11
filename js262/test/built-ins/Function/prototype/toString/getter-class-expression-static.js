

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
description: Function.prototype.toString on a getter (class; static)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
let f = Object.getOwnPropertyDescriptor(class { static get  f  (  )  {  } }, "f").get;
let g = Object.getOwnPropertyDescriptor(class { static get  [  "g"  ]  (  )  {  } }, "g").get;
let h = Object.getOwnPropertyDescriptor(class { static get  [  x  ]  (  )  {  } }, "h").get;

assertToStringOrNativeFunction(f, "get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }");
assertToStringOrNativeFunction(g, "get /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
assertToStringOrNativeFunction(h, "get /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
