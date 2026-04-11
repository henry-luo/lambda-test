

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: Block cannot contain SuperCall
info: |
  ClassStaticBlock : static { ClassStaticBlockBody }

  - It is a Syntax Error if HasDirectSuper of ClassStaticBlock is true.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

class C {
  static {
    super();
  }
}
