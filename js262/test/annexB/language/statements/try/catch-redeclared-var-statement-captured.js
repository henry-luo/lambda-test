

/*---
es5id: 12.14-2
es6id: B.3.5
description: >
    catch doesn't change declaration scope - var initializer in catch
    with same name as catch parameter changes parameter
---*/

  function capturedFoo() {return foo};
  foo = "prior to throw";
  try {
    throw new Error();
  }
  catch (foo) {
    var foo = "initializer in catch";
  }

assert.sameValue(capturedFoo(), "prior to throw");
