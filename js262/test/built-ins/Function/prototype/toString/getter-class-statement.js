

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
description: Function.prototype.toString on a getter (class)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
class F { get  f  (  )  {  } }
class G { get  [  "g"  ]  (  )  {  } }
class H { get  [  x  ]  (  )  {  } }

let f = Object.getOwnPropertyDescriptor(F.prototype, "f").get;
let g = Object.getOwnPropertyDescriptor(G.prototype, "g").get;
let h = Object.getOwnPropertyDescriptor(H.prototype, "h").get;

assertToStringOrNativeFunction(f, "get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }");
assertToStringOrNativeFunction(g, "get /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
assertToStringOrNativeFunction(h, "get /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
