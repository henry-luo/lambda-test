

/*---
description: Function.prototype.toString on a private method
features: [class-methods-private]
includes: [nativeFunctionMatcher.js]
---*/

let c = new (class {
  #f  (  )  {  }
  assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
});

c.assert("#f /* a */ ( /* b */ ) /* c */ { /* d */ }");
