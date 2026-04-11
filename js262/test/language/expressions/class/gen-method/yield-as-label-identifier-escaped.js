

/*---
description: yield is a reserved keyword within generator function bodies and may not be used as a label identifier. (Generator method as a ClassExpression element)
esid: prod-GeneratorMethod
features: [generators]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      MethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * PropertyName ( UniqueFormalParameters ) { GeneratorBody }


    LabelIdentifier : Identifier

    It is a Syntax Error if this production has a [Yield] parameter and
    StringValue of Identifier is "yield".

---*/
$DONOTEVALUATE();

var C = class {*gen() {
    yi\u0065ld: ;
}};
