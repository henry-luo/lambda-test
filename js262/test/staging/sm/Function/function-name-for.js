

/*---
flags:
  - noStrict
description: |
  Anonymous function name should be set based on for-in initializer
info: bugzilla.mozilla.org/show_bug.cgi?id=883377
esid: pending
---*/

var exprs = [
    ["function() {}", false],
    ["function named() {}", true],
    ["function*() {}", false],
    ["function* named() {}", true],
    ["async function() {}", false],
    ["async function named() {}", true],
    ["() => {}", false],
    ["async () => {}", false],
    ["class {}", false],
    ["class named {}", true],
];

function testForInHead(expr, named) {
    eval(`
    for (var forInHead = ${expr} in {}) {
    }
    `);
    assert.sameValue(forInHead.name, named ? "named" : "forInHead");
}
for (var [expr, named] of exprs) {
    testForInHead(expr, named);
}
