

/*---
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
description: Function.prototype.toString on a generator function declaration
includes: [nativeFunctionMatcher.js]
---*/

function  *  g  (  x  ,  y  )  {  ;  ;  }

assertToStringOrNativeFunction(g, "function /* a */ * /* b */ g /* c */ ( /* d */ x /* e */ , /* f */ y /* g */ ) /* h */ { /* i */ ; /* j */ ; /* k */ }");
