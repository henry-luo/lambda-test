

/*---
esid: sec-setnfdigitoptions
description: >
    When a currency is used in Intl.NumberFormat and minimumFractionDigits is
    not provided, maximumFractionDigits should be set as provided.
---*/

assert.sameValue((new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1
})).resolvedOptions().maximumFractionDigits, 1);

assert.sameValue((new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'CLF',
    maximumFractionDigits: 3
})).resolvedOptions().maximumFractionDigits, 3);
