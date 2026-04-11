

/*---
es5id: 12.10-0-8
description: with introduces scope - var initializer sets like named property
flags: [noStrict]
---*/

  var o = {foo: 42};

  with (o) {
    var foo = "set in with";
  }

assert.sameValue(o.foo, "set in with", 'o.foo');
