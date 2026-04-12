

/*---
es6id: 12.2.5
description: >
    In a class, computed property names for static
    generators can be named "constructor"
---*/
class C {
  static *['constructor']() {}
}
