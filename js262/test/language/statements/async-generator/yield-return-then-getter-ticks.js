

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
description: >
  Return resumption value is awaited upon and hence is treated as a thenable.
info: |
  14.4.14 Runtime Semantics: Evaluation
    YieldExpression : yield AssignmentExpression

    ...
    3. Let value be ? GetValue(exprRef).
    4. If generatorKind is async, then return ? AsyncGeneratorYield(value).
    ...

  25.5.3.7 AsyncGeneratorYield ( value )
    ...
    5. Set value to ? Await(value).
    ...
    8. Set the code evaluation state of genContext such that when evaluation is resumed with a
       Completion resumptionValue the following steps will be performed:
      ...
      b. Let awaited be Await(resumptionValue.[[Value]]).
      ...
      e. Return Completion { [[Type]]: return, [[Value]]: awaited.[[Value]], [[Target]]: empty }.
      ...

  6.2.3.1 Await
    ...
    2. Let promise be ? PromiseResolve(%Promise%, « value »).
    ...

  25.6.4.5.1 PromiseResolve ( C, x )
    ...
    3. Let promiseCapability be ? NewPromiseCapability(C).
    4. Perform ? Call(promiseCapability.[[Resolve]], undefined, « x »).
    ...

  25.6.1.5 NewPromiseCapability ( C )
    ...
    7. Let promise be ? Construct(C, « executor »).
    ...

  25.6.3.1 Promise ( executor )
    ...
    8. Let resolvingFunctions be CreateResolvingFunctions(promise).
    ...

  25.6.1.3 CreateResolvingFunctions ( promise )
    ...
    2. Let stepsResolve be the algorithm steps defined in Promise Resolve Functions (25.6.1.3.2).
    3. Let resolve be CreateBuiltinFunction(stepsResolve, « [[Promise]], [[AlreadyResolved]] »).
    ...

  25.6.1.3.2 Promise Resolve Functions
    ...
    9. Let then be Get(resolution, "then").
    ...

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/

var expected = [
  "start",

  
  "tick 1",

  
  "get then",

  
  "tick 2",
];

var actual = [];

async function* f() {
  actual.push("start");
  yield 123;
  actual.push("stop - never reached");
}

Promise.resolve(0)
  .then(() => actual.push("tick 1"))
  .then(() => actual.push("tick 2"))
  .then(() => {
    assert.compareArray(actual, expected, "Ticks for return with thenable getter");
}).then($DONE, $DONE);

var it = f();


it.next();


it.return({
  get then() {
    actual.push("get then");
  }
});
