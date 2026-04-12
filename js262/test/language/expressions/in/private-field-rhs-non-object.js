

/*---
description: Algorithm interrupted by non-object right-hand side
info: |
  Syntax
    RelationalExpression[In, Yield, Await]:
    [...]
    [+In]PrivateIdentifier in ShiftExpression[?Yield, ?Await]

  [...]

  1. Let privateIdentifier be the StringValue of PrivateIdentifier.
  2. Let rref be the result of evaluating ShiftExpression.
  3. Let rval be ? GetValue(rref).
  4. If Type(rval) is not Object, throw a TypeError exception.
esid: sec-relational-operators-runtime-semantics-evaluation
features: [class-fields-private, class-fields-private-in]
---*/

let caught = null;

class C {
  #field;

  constructor() {
    try {
      

      #field in {} << 0;
    } catch (error) {
      caught = error;
    }
  }
}

new C();

assert.notSameValue(caught, null);
assert.sameValue(caught.constructor, TypeError);
