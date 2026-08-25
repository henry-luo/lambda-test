#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { RadiantLayoutTester } = require('./test_radiant_layout');
const { compactBrowserReference, compactFixtureCandidates } = require('./comparison_schema');

async function main() {
    const requested = process.argv[2] || 'wpt-css-multicol';
    const tester = new RadiantLayoutTester({
        projectRoot: path.resolve(__dirname, '../..'),
        json: true,
        emitJson: false
    });
    const categories = requested === '--all'
        ? await tester.getAvailableCategories()
        : [requested];
    const references = new Map();
    let missing = 0;
    let discoveredTests = 0;

    for (const category of categories) {
        const discovered = await tester.discoverCategoryTasks(category);
        discoveredTests += discovered.tasks.length;
        for (const task of discovered.tasks) {
            const testName = tester.getTestNameFromPath(task.htmlFile, category);
            const resolved = await tester.resolveBrowserReference(
                testName, category, task.htmlFile, { preferCompact: false });
            if (!resolved) {
                missing++;
                continue;
            }
            references.set(resolved.sourcePath, compactFixtureCandidates(resolved.sourcePath));
        }
    }

    let sourceBytes = 0;
    let compactBytes = 0;
    let generatedFixtures = 0;
    let existingFixtures = 0;
    const collisions = [];
    for (const [sourcePath, outputCandidates] of references) {
        const source = await fs.readFile(sourcePath, 'utf8');
        const compact = JSON.stringify(compactBrowserReference(JSON.parse(source)));
        let outputPath = null;
        for (const candidate of outputCandidates) {
            try {
                const existing = JSON.parse(await fs.readFile(candidate, 'utf8'));
                if (existing.schema_version === 2) {
                    outputPath = candidate;
                    existingFixtures++;
                    break;
                }
            } catch (error) {
                if (error.code === 'ENOENT') {
                    outputPath = candidate;
                    break;
                }
                if (!(error instanceof SyntaxError)) throw error;
            }
        }
        if (!outputPath) {
            collisions.push({ sourcePath, outputCandidates });
            continue;
        }
        await fs.writeFile(outputPath, compact);
        generatedFixtures++;
        sourceBytes += Buffer.byteLength(source);
        compactBytes += Buffer.byteLength(compact);
    }

    console.log(JSON.stringify({
        requested,
        categories: categories.length,
        discoveredTests,
        resolvedReferences: references.size,
        generatedFixtures,
        existingFixtures,
        missingReferences: missing,
        collisionCount: collisions.length,
        collisions: collisions.slice(0, 20),
        sourceBytes,
        compactBytes,
        compactPercent: sourceBytes > 0
            ? Number((compactBytes * 100 / sourceBytes).toFixed(1))
            : 0
    }, null, 2));
}

main().catch(error => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
});
