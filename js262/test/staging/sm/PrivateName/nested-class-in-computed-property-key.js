

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
let capturedPrivateAccess;
class A {
  
  static #x = 42;

  static [(
    
    class {},

    
    capturedPrivateAccess = () => A.#x
  )];
}
assert.sameValue(capturedPrivateAccess(), 42);

