

/*---
description: Forbidden extension, o.caller (generator method)
esid: sec-generator-definitions-runtime-semantics-propertydefinitionevaluation
features: [generators]
flags: [generated, noStrict]
info: |
    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }


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
var obj = {
  *method() {
    "use strict";
    
    
    let descriptor = Object.getOwnPropertyDescriptor(inner, "caller");
    if (descriptor && descriptor.configurable && true) {
      Object.defineProperty(inner, "caller", {get(){return 1}});
    }
    var result = inner();
    if (descriptor && descriptor.configurable && true) {
      assert.sameValue(result, 1, 'If this test defined an own "caller" property on the inner function, then it should be accessible and should return the value it was set to.');
    }

    
    if (result !== CALLER_OWN_PROPERTY_DOES_NOT_EXIST) {
      assert.notSameValue(result, this.method);
    }
    callCount++;
  }
};

obj.method().next().value;
assert.sameValue(callCount, 1, 'generator method body was evaluated');
