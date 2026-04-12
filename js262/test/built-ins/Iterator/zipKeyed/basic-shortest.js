

/*---
esid: sec-iterator.zipkeyed
description: >
  Basic Iterator.zipkeyed test with "shortest" mode.
includes: [compareArray.js, propertyHelper.js, iteratorZipUtils.js]
features: [joint-iteration]
---*/

function testSequence(inputs, inputsLabel, minLength, maxLength) {
  function test(options, optionsLabel) {
    var label = optionsLabel + ", " + inputsLabel;
    var it = Iterator.zipKeyed(inputs, options);
    assertZippedKeyed(it, inputs, minLength, label);

    
    assertIteratorResult(it.next(), undefined, true, label + ": after completion");
  }

  test(undefined, "options = undefined");

  test({}, "options = {}");

  test({ mode: "shortest" }, "options = { mode: 'shortest' }");
}

forEachSequenceCombinationKeyed(testSequence);
