

/*---
es6id: 9.2.2
description: >
    [[Construct]] ( argumentsList, newTarget)

    ...
    13. If result.[[type]] is return, then
      ...
      c. If result.[[value]] is not undefined, throw a TypeError exception.
    ...

    `return true;`

---*/
class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    super();

    return true;
  }
}

assert.throws(TypeError, function() {
  new Derived();
});
