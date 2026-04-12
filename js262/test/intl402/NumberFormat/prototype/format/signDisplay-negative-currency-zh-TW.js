

/*---
esid: sec-intl.numberformat.prototype.format
description: Checks handling of the signDisplay option to the NumberFormat constructor.
locale: [zh-TW]
features: [Intl.NumberFormat-v3]
---*/

const nf = new Intl.NumberFormat("zh-TW", { style: "currency", currency: "USD", currencySign: "accounting", signDisplay: "negative" });
assert.sameValue(nf.format(-987), "(US$987.00)");
assert.sameValue(nf.format(-0.0001), "US$0.00");
assert.sameValue(nf.format(-0), "US$0.00");
assert.sameValue(nf.format(0), "US$0.00");
assert.sameValue(nf.format(0.0001), "US$0.00");
assert.sameValue(nf.format(987), "US$987.00");
