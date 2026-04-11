

/*---
description: Function.prototype.toString on a static private method
features: [class-static-methods-private]
includes: [nativeFunctionMatcher.js]
---*/

let C = class {
  static #f  (  )  {  }
  static assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
};

C.assert("#f /* a */ ( /* b */ ) /* c */ { /* d */ }");
