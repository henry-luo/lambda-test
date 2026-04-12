

/*---
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
description: Function.prototype.toString on a class declaration (implicit constructor)
includes: [nativeFunctionMatcher.js]
---*/

class  A  {  }
class  B  extends  A  {  }
class  C  extends  B  {  m  (  )  {  }  }

assertToStringOrNativeFunction(A, "class /* a */ A /* b */ { /* c */ }");
assertToStringOrNativeFunction(B, "class /* a */ B /* b */ extends /* c */ A /* d */ { /* e */ }");
assertToStringOrNativeFunction(C, "class /* a */ C /* b */ extends /* c */ B /* d */ { /* e */ m /* f */ ( /* g */ ) /* h */ { /* i */ } /* j */ }");
