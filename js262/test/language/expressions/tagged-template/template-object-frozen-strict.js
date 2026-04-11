

/*---
es6id: 12.3.7
description: Template objects are frozen (as demonstrated within strict mode)
info: |
    The first argument to a tagged template should be frozen and define a `raw`
    property that is also frozen.
flags: [onlyStrict]
---*/

var templateObject = null;
var threwError = false;
(function(parameter) {
  templateObject = parameter;
})``;

assert(templateObject !== null);

assert.throws(TypeError, function() {
  templateObject.test262Prop = true;
});

assert(
  templateObject.raw !== undefined , 'Template object defines a `raw` property'
);

assert.throws(TypeError, function() {
  templateObject.raw.test262Prop = true;
});
