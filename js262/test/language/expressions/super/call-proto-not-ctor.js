

/*---
esid: sec-super-keyword
description: SuperCall should evaluate Arguments prior to checking IsConstructor
info: |
  SuperCall : `super` Arguments

  [...]
  3. Let _func_ be ! GetSuperConstructor().
  4. Let _argList_ be ? ArgumentListEvaluation of |Arguments|.
  5. If IsConstructor(_func_) is *false*, throw a *TypeError* exception.
  [...]
features: [class]
---*/

var evaluatedArg = false;
var caught;
class C extends Object {
  constructor() {
    try {
      super(evaluatedArg = true);
    } catch (err) {
      caught = err;
    }
  }
}

Object.setPrototypeOf(C, parseInt);


try {
  new C();
} catch (_) {}

assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);
assert(evaluatedArg, 'performs ArgumentsListEvaluation');
