

/*---
description: Valid accessor FieldDefinition, ClassElementName, PropertyName Syntax (class expression)
esid: prod-ClassElement
features: [decorators, class]
flags: [generated]
info: |
    FieldDefinition[Yield, Await] :
      ClassElementName[?Yield, ?Await] Initializer[+In, ?Yield, ?Await]opt
      accessor [no LineTerminator here] ClassElementName[?Yield, ?Await] Initializer[+In, ?Yield, ?Await]opt

---*/


var C = class {
  accessor $;
  accessor _;
  accessor \u{6F};
  accessor \u2118;
  accessor ZW_\u200C_NJ;
  accessor ZW_\u200D_J;
};
