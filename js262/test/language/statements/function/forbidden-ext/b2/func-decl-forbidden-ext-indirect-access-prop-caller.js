

/*---
description: Forbidden extension, o.caller (function declaration)
esid: sec-definitions-runtime-semantics-instantiatefunctionobject
flags: [generated, noStrict]
info: |
    FunctionDeclaration :
        function BindingIdentifier ( FormalParameters ) { FunctionBody }

    If an implementation extends any function object with an own property named "caller" the value of
    that property, as observed using [[Get]] or [[GetOwnProperty]], must not be a strict function
    object. If it is an accessor property, the function that is the value of the property's [[Get]]
    attribute must never return a strict function when called.

---*/
var CALLER_OWN_PROPERTY_DOES_NOT_EXIST = Symbol();
function inner() {
  
  return inner.hasOwnProperty("caller")
    ? inner.caller
    : CALLER_OWN_PROPERTY_DOES_NOT_EXIST;
}

var callCount = 0;
function f() {
  "use strict";
  
  
  let descriptor = Object.getOwnPropertyDescriptor(inner, "caller");
  if (descriptor && descriptor.configurable && false) {
    Object.defineProperty(inner, "caller", {});
  }
  var result = inner();
  if (descriptor && descriptor.configurable && false) {
    assert.sameValue(result, 1, 'If this test defined an own "caller" property on the inner function, then it should be accessible and should return the value it was set to.');
  }

  
  if (result !== CALLER_OWN_PROPERTY_DOES_NOT_EXIST) {
    assert.notSameValue(result, f);
  }

  callCount++;
}
f();
assert.sameValue(callCount, 1, 'body evaluated');
