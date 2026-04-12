

/*---
esid: sec-try-statement-runtime-semantics-evaluation
description: >
  Returns the correct completion values of try-catch-finally(Normal) in functions
info: |
  TryStatement : try Block Catch Finally

    Let B be the result of evaluating Block.
    If B.[[Type]] is throw, let C be CatchClauseEvaluation of Catch with argument B.[[Value]].
    Else, let C be B.
    Let F be the result of evaluating Finally.
    If F.[[Type]] is normal, set F to C.
    Return Completion(UpdateEmpty(F, undefined)).
---*/


var count = {
  catch: 0,
  finally: 0
};

var fn = function() {
  try {
    return 'try';
  } catch(e) {
    count.catch += 1;
    return 'catch';
  } finally {
    count.finally += 1;
    'normal';
  }
  return 'wat';
};

assert.sameValue(fn(), 'try', '1: try Return, catch Return, finally Normal; Completion: try');
assert.sameValue(count.catch, 0, '1');
assert.sameValue(count.finally, 1, '1');


count.catch = 0;
count.finally = 0;
fn = function() {
  try {
    throw 'try';
  } catch(e) {
    count.catch += 1;
    return 'catch';
  } finally {
    count.finally += 1;
    'finally';
  }
  return 'wat';
};

assert.sameValue(fn(), 'catch', '2: try Abrupt, catch Return, finally Normal; Completion: catch');
assert.sameValue(count.catch, 1, '2: catch count');
assert.sameValue(count.finally, 1, '2: fiinally count');


count.catch = 0;
count.finally = 0;
fn = function() {
  try {
    throw 'try';
  } catch(e) {
    count.catch += 1;
    throw new Test262Error('catch');
  } finally {
    count.finally += 1;
    'finally';
  }
  return 'wat';
};

assert.throws(Test262Error, fn, '3: try Abrupt, catch Abrupt, finally Normal; Completion: catch');
assert.sameValue(count.catch, 1, '3: catch count');
assert.sameValue(count.finally, 1, '3: fiinally count');
