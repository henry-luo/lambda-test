

/*---
description: >
    ImportCall is a CallExpression and can be used before a template literal
esid: prod-ImportCall
info: |
  CallExpression:
    ImportCall
    CallExpression TemplateLiteral
    CallExpression Arguments
features: [dynamic-import]
---*/


assert.throws(TypeError, () => {
    import('./empty_FIXTURE.js')``;
});

assert.throws(TypeError, () => {
    import('./empty_FIXTURE.js')`something`;
});

assert.throws(TypeError, () => {
    import('./empty_FIXTURE.js')`${42}`;
});
