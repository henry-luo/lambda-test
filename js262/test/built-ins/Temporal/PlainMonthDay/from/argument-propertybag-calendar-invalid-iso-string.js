

/*---
esid: sec-temporal.plainmonthday.from
description: Various invalid ISO string values for calendar in a property bag
features: [Temporal]
---*/

const invalidStrings = [
	["", "empty string"],
];

for (const [calendar, description] of invalidStrings) {
	const arg = { monthCode: "M11", day: 18, calendar };
	assert.throws(
		RangeError,
		() => Temporal.PlainMonthDay.from(arg),
		`${description} is not a valid calendar ID`
	);
}
