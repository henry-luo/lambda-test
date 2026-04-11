

/*---
description: Valid PrivateName as private getter (multiple stacked fields definitions through ASI)
esid: prod-FieldDefinition
features: [class-methods-private, class-fields-private, class, class-fields-public]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement :
      MethodDefinition
      ...
      ;

    MethodDefinition :
      ...
      get ClassElementName ( ){ FunctionBody }
      ...

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"

    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


class C {
  #$_; #__; #\u{6F}_; #℘_; #ZW_‌_NJ_; #ZW_‍_J_;
  get #$() {
    return this.#$_;
  }
  get #_() {
    return this.#__;
  }
  get #\u{6F}() {
    return this.#\u{6F}_;
  }
  get #℘() {
    return this.#℘_;
  }
  get #ZW_‌_NJ() {
    return this.#ZW_‌_NJ_;
  }
  get #ZW_‍_J() {
    return this.#ZW_‍_J_;
  }

  foo = "foobar"
  bar = "barbaz";
  $(value) {
    this.#$_ = value;
    return this.#$;
  }
  _(value) {
    this.#__ = value;
    return this.#_;
  }
  \u{6F}(value) {
    this.#\u{6F}_ = value;
    return this.#\u{6F};
  }
  ℘(value) {
    this.#℘_ = value;
    return this.#℘;
  }
  ZW_‌_NJ(value) {
    this.#ZW_‌_NJ_ = value;
    return this.#ZW_‌_NJ;
  }
  ZW_‍_J(value) {
    this.#ZW_‍_J_ = value;
    return this.#ZW_‍_J;
  }

}

var c = new C();

assert.sameValue(c.foo, "foobar");
assert(
  !Object.prototype.hasOwnProperty.call(C, "foo"),
  "foo doesn't appear as an own property on the C constructor"
);
assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "foo"),
  "foo doesn't appear as an own property on the C prototype"
);

verifyProperty(c, "foo", {
  value: "foobar",
  enumerable: true,
  configurable: true,
  writable: true,
});

assert.sameValue(c.bar, "barbaz");
assert(
  !Object.prototype.hasOwnProperty.call(C, "bar"),
  "bar doesn't appear as an own property on the C constructor"
);
assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "bar"),
  "bar doesn't appear as an own property on the C prototype"
);

verifyProperty(c, "bar", {
  value: "barbaz",
  enumerable: true,
  configurable: true,
  writable: true,
});

assert.sameValue(c.$(1), 1);
assert.sameValue(c._(1), 1);
assert.sameValue(c.\u{6F}(1), 1);
assert.sameValue(c.℘(1), 1);
assert.sameValue(c.ZW_‌_NJ(1), 1);
assert.sameValue(c.ZW_‍_J(1), 1);
