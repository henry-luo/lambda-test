

/*---
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
description: Function.prototype.toString on a class declaration (with complex heritage)
includes: [nativeFunctionMatcher.js]
---*/

class  A  extends  class  B  {  }  {  }

assertToStringOrNativeFunction(A, "class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }");
