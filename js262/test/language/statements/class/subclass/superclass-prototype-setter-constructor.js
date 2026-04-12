

/*---
es6id: 14.5
description: >
    superclass setter "constructor" override
---*/
function Base() {}

Base.prototype = {
  set constructor(_) {
    throw new Test262Error("`Base.prototype.constructor` is unreachable.");
  }
};

class C extends Base {}

new C();
