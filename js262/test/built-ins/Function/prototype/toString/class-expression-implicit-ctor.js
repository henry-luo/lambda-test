

/*---
esid: sec-class-definitions-runtime-semantics-evaluation
description: Function.prototype.toString on a class expression (implicit constructor)
includes: [nativeFunctionMatcher.js]
---*/

let A = class  A  {  };
let B = class  B  extends  A  {  };
let C = class  C  extends  B  {  m  (  )  {  }  };

assertToStringOrNativeFunction(A, "class /* a */ A /* b */ { /* c */ }");
assertToStringOrNativeFunction(B, "class /* a */ B /* b */ extends /* c */ A /* d */ { /* e */ }");
assertToStringOrNativeFunction(C, "class /* a */ C /* b */ extends /* c */ B /* d */ { /* e */ m /* f */ ( /* g */ ) /* h */ { /* i */ } /* j */ }");
