

/*---
esid: sec-runtime-semantics-definemethod
description: Function.prototype.toString on a method (class; static)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
class F { static f  (  )  {  } }
class G { static [  "g"  ]  (  )  {  } }
class H { static [  x  ]  (  )  {  } }

let f = F.f;
let g = G.g;
let h = H.h;

assertToStringOrNativeFunction(f, "f /* a */ ( /* b */ ) /* c */ { /* d */ }");
assertToStringOrNativeFunction(g, "[ /* a */ \"g\" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
assertToStringOrNativeFunction(h, "[ /* a */ x /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
