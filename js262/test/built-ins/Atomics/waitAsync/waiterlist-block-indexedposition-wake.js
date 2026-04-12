

/*---
esid: sec-atomics.waitasync
description: >
  Get the correct WaiterList
info: |
  Atomics.waitAsync( typedArray, index, value, timeout )

  1. Return DoWait(async, typedArray, index, value, timeout).

  DoWait ( mode, typedArray, index, value, timeout )

  11. Let indexedPosition be (i × 4) + offset.
  12. Let WL be GetWaiterList(block, indexedPosition).

  GetWaiterList( block, i )

  ...
  4. Return the WaiterList that is referenced by the pair (block, i).

flags: [async]
includes: [atomicsHelper.js]
features: [Atomics.waitAsync, SharedArrayBuffer, TypedArray, Atomics, arrow-function, async-functions]
---*/
assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');

const NUMAGENT = 2;
const RUNNING = 4;

$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);

    // Wait on index 0
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, Infinity).value);
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);

    // Wait on index 2
    $262.agent.report(await Atomics.waitAsync(i32a, 2, 0, Infinity).value);
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5)
);

$262.agent.safeBroadcastAsync(i32a, RUNNING, NUMAGENT).then(async (agentCount) => {

  assert.sameValue(agentCount, NUMAGENT, 'The value of `agentCount` is expected to equal the value of NUMAGENT');

  
  assert.sameValue(Atomics.notify(i32a, 1), 0, 'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5)), 1) must return 0');

  
  assert.sameValue(Atomics.notify(i32a, 3), 0, 'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5)), 3) must return 0');

  
  assert.sameValue(Atomics.notify(i32a, 2), 1, 'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5)), 2) must return 1');
  assert.sameValue(
    await $262.agent.getReportAsync(),
    'ok',
    '(await $262.agent.getReportAsync()) resolves to the value "ok"'
  );

  
  assert.sameValue(Atomics.notify(i32a, 0), 1, 'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5)), 0) must return 1');
  assert.sameValue(
    await $262.agent.getReportAsync(),
    'ok',
    '(await $262.agent.getReportAsync()) resolves to the value "ok"'
  );

}).then($DONE, $DONE);
