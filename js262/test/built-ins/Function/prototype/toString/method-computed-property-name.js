

/*---
esid: sec-runtime-semantics-definemethod
description: Function.prototype.toString on a method (object)
includes: [nativeFunctionMatcher.js]
---*/

let f = { [  "f"  ]  (  )  {  } }.f;
let g = { [ { a(){} }.a ](){ } }["a(){}"];

assertToStringOrNativeFunction(f, "[ /* a */ \"f\" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
assertToStringOrNativeFunction(g, "[ { a(){} }.a ](){ }");
