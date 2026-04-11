

/*---
es6id: 14.5
description: >
    class side effects in property define
---*/
function B() {}
B.prototype = {
  constructor: B,
  set m(v) {
    throw Error();
  }
};

class C extends B {
  m() { return 1; }
}

assert.sameValue(new C().m(), 1, "`new C().m()` returns `1`");
