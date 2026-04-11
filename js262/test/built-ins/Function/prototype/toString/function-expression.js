

/*---
esid: sec-function-definitions-runtime-semantics-evaluation
description: Function.prototype.toString on a function expression
includes: [nativeFunctionMatcher.js]
---*/

let f = function  F  (  x  ,  y  )  {  ;  ;  };
let g = function  (  x  ,  y  )  {  ;  ;  };

assertToStringOrNativeFunction(f, "function /* a */ F /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }");
assertToStringOrNativeFunction(g, "function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }");
