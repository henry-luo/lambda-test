

/*---
esid: sec-createdatetimeformat
description: >
    Checks error cases for the options argument to the DateTimeFormat constructor.
info: |
    CreateDateTimeFormat ( dateTimeFormat, locales, options, required, defaults )

    ...
    39. Let dateStyle be ? GetOption(options, "dateStyle", "string", « "full", "long", "medium", "short" », undefined).
features: [Intl.DateTimeFormat-datetimestyle]
---*/


const invalidOptions = [
  "",
  "FULL",
  " long",
  "short ",
  "narrow",
  "numeric",
];
for (const dateStyle of invalidOptions) {
  assert.throws(RangeError, function() {
    new Intl.DateTimeFormat("en", { dateStyle });
  }, `new Intl.DateTimeFormat("en", { dateStyle: "${dateStyle}" }) throws RangeError`);
}
