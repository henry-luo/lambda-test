

/*---
es6id: 14.5
description: >
    class constructor strict
---*/
class C {
  constructor() {
    assert.throws(ReferenceError, function() {
      nonExistingBinding = 42;
    });
  }
}
new C();
