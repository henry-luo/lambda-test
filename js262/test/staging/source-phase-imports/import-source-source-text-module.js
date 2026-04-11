

/*---
description: >
  GetModuleSource of SourceTextModule throws a SyntaxError.
esid: sec-source-text-module-record-getmodulesource
features: [source-phase-imports]
flags: [async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function () {
  await assert.throwsAsync(
    SyntaxError,
    () => import.source('./modules-simple_FIXTURE.js'),
    "Promise should be rejected with SyntaxError");

  
  await assert.throwsAsync(
    SyntaxError,
    () => import('./modules-import-source_FIXTURE.js'),
    "Promise should be rejected with SyntaxError in indirect import source");
});
