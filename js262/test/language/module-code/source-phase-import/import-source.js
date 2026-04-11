

/*---
description: >
  Verify that ImportDeclaration can be correctly parsed.
esid: sec-modules
features: [source-phase-imports]
flags: [async]
includes: [asyncHelpers.js]
---*/

function assertImportSourceResolutionFailure(specifier) {
  
  
  return import(specifier).then(
    () => {
      throw new Test262Error(`${specifier}: Promise should be rejected`);
    },
    error => {
      if (error instanceof SyntaxError) {
        throw new Test262Error(`${specifier}: Promise should be rejected with a non-SyntaxError`);
      }
    }
  );
}

asyncTest(async function () {
  await assertImportSourceResolutionFailure('./import-source-binding-name_FIXTURE.js');
  await assertImportSourceResolutionFailure('./import-source-binding-name-2_FIXTURE.js');
  await assertImportSourceResolutionFailure('./import-source-newlines_FIXTURE.js');
});
