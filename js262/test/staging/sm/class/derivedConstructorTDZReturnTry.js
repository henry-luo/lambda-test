

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class base {}
class derived extends base {
  constructor() {
    try {
      return;
    } catch (e) {
      try {
        return;
      } catch (e) {}
    }
  }
}
assertThrowsInstanceOf(() => new derived, ReferenceError);

