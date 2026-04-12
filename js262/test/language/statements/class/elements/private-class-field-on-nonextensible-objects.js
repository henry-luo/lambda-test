

/*---
description: It is not possible to add private fields on non-extensible objects
esid: sec-define-field
info: |
  1.1 PrivateFieldAdd ( O, P, value )
    1. If O.[[Extensible]] is false, throw a TypeError exception.
    ...

features:
  - class
  - class-fields-private
  - class-fields-public
  - nonextensible-applies-to-private
flags: [onlyStrict]
---*/


class NonExtensibleBase {
  constructor(seal) {
    if (seal) Object.preventExtensions(this);
  }
}


class ClassWithPrivateField extends NonExtensibleBase {
  #val;

  constructor(seal) {
    super(seal);
    this.#val = 42;
  }
  val() {
    return this.#val;
  }
}

const t = new ClassWithPrivateField(false);

assert.sameValue(t.val(), 42);


assert.throws(TypeError, function () {
  new ClassWithPrivateField(true);
});


class ClassWithPrivateMethod extends NonExtensibleBase {
  constructor(seal) {
    super(seal);
  }
  
  #privateMethod() {
    return 42;
  };
  
  publicMethod() {
    return this.#privateMethod();
  }
}

const m = new ClassWithPrivateMethod(false);

assert.sameValue(m.publicMethod(), 42);


assert.throws(TypeError, function () {
  new ClassWithPrivateMethod(true);
});


class ClassWithPrivateAccessor extends NonExtensibleBase {
  constructor(seal) {
    super(seal);
  }
  
  get #privateAccessor() {
    return 42;
  };
  
  get publicAccessor() {
    return this.#privateAccessor;
  }
}

const a = new ClassWithPrivateAccessor(false);

assert.sameValue(a.publicAccessor, 42);


assert.throws(TypeError, function () {
  new ClassWithPrivateAccessor(true);
});


class TestNonExtensibleData {
  #g = (Object.preventExtensions(this), "Test262");
}

assert.throws(TypeError, function () {
  new TestNonExtensibleData();
});


assert.throws(TypeError, function () {
  class TestNonExtensibleStaticData {
    static #g = (Object.preventExtensions(TestNonExtensibleStaticData), "Test262");
  }
});
