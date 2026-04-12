

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
description: Function.prototype.toString on a generator function expression
includes: [nativeFunctionMatcher.js]
---*/

let f = function  *  F  (  x  ,  y  )  {  ;  ;  }
let g = function  *  (  x  ,  y  )  {  ;  ;  }

assertToStringOrNativeFunction(f, "function /* a */ * /* b */ F /* c */ ( /* d */ x /* e */ , /* f */ y /* g */ ) /* h */ { /* i */ ; /* j */ ; /* k */ }");
assertToStringOrNativeFunction(g, "function /* a */ * /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }");
