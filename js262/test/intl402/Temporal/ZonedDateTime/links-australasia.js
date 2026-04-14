

/*---
esid: sec-temporal.zoneddatetime
description: ZonedDateTime constructor accepts link names as time zone ID input
features: [Temporal]
---*/

const testCases = [
  "Pacific/Saipan",  
  "Antarctica/McMurdo",  
  "Antarctica/DumontDUrville",  
  "Pacific/Midway",  
];

for (let id of testCases) {
  const instance = new Temporal.ZonedDateTime(0n, id);
  assert.sameValue(instance.timeZoneId, id);
}
