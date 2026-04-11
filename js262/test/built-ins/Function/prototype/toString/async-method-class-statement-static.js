

/*---
esid: sec-function.prototype.tostring
description: Function.prototype.toString on an async method
features: [async-functions]
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
class F { static async f  (  )  {  } }
class G { static async  [  "g"  ]  (  )  {  } }
class H { static async  [  x  ]  (  )  {  } }

let f = F.f;
let g = G.g;
let h = H.h;

assertToStringOrNativeFunction(f, "async f /* a */ ( /* b */ ) /* c */ { /* d */ }");
assertToStringOrNativeFunction(g, "async /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
assertToStringOrNativeFunction(h, "async /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
