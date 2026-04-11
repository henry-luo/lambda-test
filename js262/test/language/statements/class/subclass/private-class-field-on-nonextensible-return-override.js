

/*---
description: It is not possible to add private fields on non-extensible objects via return override
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


class TrojanBase {
  constructor(obj) {
    return obj;
  }
}


class ClassWithPrivateField extends TrojanBase {
  #val;

  constructor(obj) {
    super(obj);
    this.#val = 42;
  }
  static val(obj) {
    return obj.#val;
  }
}

const t = new ClassWithPrivateField({});

assert.sameValue(ClassWithPrivateField.val(t), 42);


assert.throws(TypeError, function () {
  new ClassWithPrivateField(Object.preventExtensions({}));
});


class ClassWithPrivateMethod extends TrojanBase {
  constructor(obj) {
    super(obj);
  }
  
  #privateMethod() {
    return 42;
  };
  static val(obj) {
    return obj.#privateMethod();
  }
}

const m = new ClassWithPrivateMethod({});

assert.sameValue(ClassWithPrivateMethod.val(m), 42);


assert.throws(TypeError, function () {
  new ClassWithPrivateMethod(Object.preventExtensions({}));
});


class ClassWithPrivateAccessor extends TrojanBase {
  constructor(obj) {
    super(obj);
  }
  
  get #privateAccessor() {
    return 42;
  };
  static val(obj) {
    return obj.#privateAccessor;
  }
}

const a = new ClassWithPrivateAccessor({});

assert.sameValue(ClassWithPrivateAccessor.val(a), 42);


assert.throws(TypeError, function () {
  new ClassWithPrivateAccessor(Object.preventExtensions({}));
});
