

/*---
esid: sec-temporal.zoneddatetime
description: ZonedDateTime constructor accepts link names as time zone ID input
features: [Temporal, canonical-tz]
---*/

const testCases = [
  "GMT",  
  "Etc/Universal",  
  "Etc/Zulu",  
  "Etc/Greenwich",  
  "Etc/GMT-0",  
  "Etc/GMT+0",  
  "Etc/GMT0",  
];

for (let id of testCases) {
  const instance = new Temporal.ZonedDateTime(0n, id);
  assert.sameValue(instance.timeZoneId, id);
}
