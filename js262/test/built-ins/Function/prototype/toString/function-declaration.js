

/*---
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
description: Function.prototype.toString on a function declaration
includes: [nativeFunctionMatcher.js]
---*/

function  f  (  x  ,  y  )  {  ;  ;  }

assertToStringOrNativeFunction(f, "function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }");
