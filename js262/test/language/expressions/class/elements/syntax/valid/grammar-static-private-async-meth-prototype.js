

/*---
description: Static Async Private Methods can be named "#prototype" (class expression)
esid: prod-ClassElement
features: [async-functions, class-static-methods-private, class]
flags: [generated]
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is "prototype"

---*/


var C = class {
  static async #prototype() {}
};
