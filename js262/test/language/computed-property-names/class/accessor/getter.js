

/*---
es6id: 12.2.5
description: >
    Computed property names for getters
---*/
class C {
  get ['a']() {
    return 'A';
  }
}
assert.sameValue(new C().a, 'A', "The value of `new C().a` is `'A'`");
