

/*---
es6id: 14.2
description: >
    ArrowFunction[In, Yield] :
      ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

    LineTerminator not present
    ArrowParameters[Yield] : BindingIdentifier
    ConciseBody[In] : AssignmentExpression[?In]
---*/
var af = x => x;

assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
