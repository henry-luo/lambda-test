

/*---
description: Function.prototype.toString on a private method
features: [class-methods-private]
includes: [nativeFunctionMatcher.js]
---*/

class C {
  #f  (  )  {  }
  assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
}

let c = new C();
c.assert("#f /* a */ ( /* b */ ) /* c */ { /* d */ }");
