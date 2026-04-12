

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
description: Function.prototype.toString on a getter (class; static)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
class F { static get  f  (  )  {  } }
class G { static get  [  "g"  ]  (  )  {  } }
class H { static get  [  x  ]  (  )  {  } }

let f = Object.getOwnPropertyDescriptor(F, "f").get;
let g = Object.getOwnPropertyDescriptor(G, "g").get;
let h = Object.getOwnPropertyDescriptor(H, "h").get;

assertToStringOrNativeFunction(f, "get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }");
assertToStringOrNativeFunction(g, "get /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
assertToStringOrNativeFunction(h, "get /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
