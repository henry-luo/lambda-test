

/*---
esid: sec-super-keyword
es6id: 12.3.5
description: >
  SuperProperty evaluation when "this" binding has not been initialized
info: |
  1. Let propertyKey be StringValue of IdentifierName.
  2. If the code matched by the syntactic production that is being evaluated is
     strict mode code, let strict be true, else let strict be false.
  3. Return ? MakeSuperPropertyReference(propertyKey, strict).

  12.3.5.3 Runtime Semantics: MakeSuperPropertyReference

  1. Let env be GetThisEnvironment( ).
  2. If env.HasSuperBinding() is false, throw a ReferenceError exception.
  3. Let actualThis be ? env.GetThisBinding().

  8.1.1.3.4 GetThisBinding

  1. Let envRec be the function Environment Record for which the method was
     invoked.
  2. Assert: envRec.[[ThisBindingStatus]] is not "lexical".
  3. If envRec.[[ThisBindingStatus]] is "uninitialized", throw a ReferenceError
     exception.
features: [class]
---*/

var caught;
class C extends Object {
  constructor() {
    try {
      super.x;
    } catch (err) {
      caught = err;
    }
  }
}


try {
  new C();
} catch (_) {}

assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, ReferenceError);
