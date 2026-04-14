

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-extensions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var BUGNUMBER = 822041;
var summary = "Live generators should not cache Gecko Profiler state";

print(BUGNUMBER + ": " + summary);

function* gen() {
  var x = yield turnoff();
  yield x;
  yield 'bye';
}

function turnoff() {
  print("Turning off profiler\n");
  disableGeckoProfiling();
  return 'hi';
}

for (var slowAsserts of [ true, false ]) {
  
  if (slowAsserts)
    enableGeckoProfilingWithSlowAssertions();
  else
    enableGeckoProfiling();

  g = gen();
  assert.sameValue(g.next().value, 'hi');
  assert.sameValue(g.next('gurgitating...').value, 'gurgitating...');
  for (var x of g)
    assert.sameValue(x, 'bye');
}

