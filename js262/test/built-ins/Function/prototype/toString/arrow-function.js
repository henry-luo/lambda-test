

/*---
esid: sec-arrow-function-definitions-runtime-semantics-evaluation
description: Function.prototype.toString on an arrow function
includes: [nativeFunctionMatcher.js]
---*/

let f = (  a  ,  b  )  =>  {  ;  };
let g = (  )  =>  0;
let h = a  =>  0;

assertToStringOrNativeFunction(f, "( /* a */ a /* b */ , /* c */ b /* d */ ) /* e */ => /* f */ { /* g */ ; /* h */ }");
assertToStringOrNativeFunction(g, "( /* a */ ) /* b */ => /* c */ 0");
assertToStringOrNativeFunction(h, "a /* a */ => /* b */ 0");
