

/*---
description: Static Private Methods can be named "#prototype" (class declaration)
esid: prod-ClassElement
features: [class-static-methods-private, class]
flags: [generated]
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is "prototype"

---*/


class C {
  static #prototype() {}
}
