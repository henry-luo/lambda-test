

/*---
es6id: 14.5
description: >
    Static method override
---*/
function Base() {}
Object.defineProperty(Base, 'staticM', {
  set: function() {
    throw new Test262Error("`Base.staticM` is unreachable.");
  }
});

class C extends Base {
  static staticM() {
    return 1;
  }
}

assert.sameValue(C.staticM(), 1, "`C.staticM()` returns `1`");
