

/*---
esid: sec-temporal.duration.prototype.total
description: relativeTo property bag with offset property is rejected if offset is in the wrong format
features: [Temporal]
---*/

const timeZone = "UTC";
const instance = new Temporal.Duration(1, 0, 0, 0, 24);

const badOffsets = [
  "00:00",    
  "+0",       
  "-000:00",  
  0,          
  null,       
  true,       
  1000n,      
  "+00:0000", 
];
badOffsets.forEach((offset) => {
  const relativeTo = { year: 2021, month: 10, day: 28, offset, timeZone };
  assert.throws(
    typeof(offset) === 'string' ? RangeError : TypeError,
    () => instance.total({ unit: "days", relativeTo }),
    `"${offset}" is not a valid offset string`
  );
});
