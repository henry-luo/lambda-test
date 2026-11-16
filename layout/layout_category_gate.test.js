const assert = require('node:assert/strict');
const test = require('node:test');
const { RadiantLayoutTester } = require('./test_radiant_layout');

for (const baselineOnly of [false, true]) {
    for (const outcome of ['pass', 'mismatch', 'error']) {
        test(`unscored category ${outcome}, baselineOnly=${baselineOnly}`, async () => {
            const tester = new RadiantLayoutTester({ baselineOnly, json: true, emitJson: false });
            tester.loadCategoryConfig = async () => null;
            tester.reportSkippedTasks = () => {};
            tester.runTestsInPool = async () => [outcome === 'error'
                ? { testName: 'sample', error: 'host failed to start' }
                : { testName: 'sample', elementComparison: { passRate: outcome === 'pass' ? 100 : 50 },
                    textComparison: { passRate: 100 } }];
            await tester.testCategory('unscored', { discoveredCount: 1, baseline: null,
                tasks: [{}], skipped: 0 });
            assert.equal(tester._categorySummaries.unscored.failed, outcome === 'pass' ? 0 : 1);
            assert.equal(tester._fullSuiteFailures || 0, outcome === 'pass' ? 0 : 1);
        });
    }
}
