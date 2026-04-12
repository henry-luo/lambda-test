

/*---
esid: sec-runtime-semantics-classstaticblockdefinitionevaluation
description: The home object for a class static initialization block is the parent class
info: |
  ClassStaticBlock : static { ClassStaticBlockBody }

  [...]
  4. Perform MakeMethod(body, homeObject).
features: [class-static-block]
---*/

function Parent() {}
Parent.test262 = 'test262';
var value;

class C extends Parent {
  static {
    value = super.test262;
  }
}

assert.sameValue(value, 'test262');
