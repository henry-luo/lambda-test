

/*---
esid: sec-evaldeclarationinstantiation
description: Re-declaration of an existing local variable binding has no effect
info: |
    [...]
    16. For each String vn in declaredVarNames, in list order do
        a. If varEnvRec is a global Environment Record, then
           [...]
        b. Else,
           i. Let bindingExists be varEnvRec.HasBinding(vn).
           ii. If bindingExists is false, then
               [...]
    [...]
flags: [noStrict]
---*/

var initial;

(function() {
  var x = 44443;
  eval('initial = x; var x;');
}());

assert.sameValue(initial, 44443);
assert.throws(ReferenceError, function() {
  x;
});
