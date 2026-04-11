

/*---
es6id: 14.2
description: >
    ArrowFunction[In, Yield] :
      ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

    ArrowParameters[Yield] :
      BindingIdentifier[?Yield]
      ...

    ConciseBody[In] :
      ...
      { FunctionBody }
---*/
var af = BindingIdentifier => {
  return BindingIdentifier;
};

assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
