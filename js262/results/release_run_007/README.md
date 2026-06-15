# JS262 Release Run 007 Report

## Run Identity

- Date captured: 2026-06-13
- Source run: latest release `--update-baseline` js262 run completed before this snapshot.
- Base commit recorded by run: `d5dc5ee10`
- Capture-time Lambda HEAD: `d5dc5ee10420745ff72941a1c6b4ff8d25c75c0e`
- lambda-test commit recorded by run: `9feff2917`
- Runtime under test: release `lambda.exe`
- GTest harness: release `test/test_js_test262_gtest.exe`
- Host capacity from baseline: 8 CPU cores, 24.0 GiB memory
- Scope: ES2024, skipping ES2025+ features (first run after the Js54 scope flip)

## Compliance Summary

- Fully passed: 40,119 / 40,262 (99.6%)
- Total discovered tests: 42,889
- Skipped: 2,627
- Batched: 40,262
- Non-fully-passing: 2 (both intentionally slow, pre-existing)
- Failed: 141 (out-of-baseline ES2024+ corner cases)
- Improvements vs prior baseline: 0
- Regressions vs baseline: 0
- Batch-lost: 0
- Crash-collateral promotions: 0
- Crash-exits at gate: 0
- Retries triggered: 0
- Failure manifest rows: 141 data rows

## Runtime Summary

- Total wall-time: 150.8 s
- Prepare: 0.0 s
- Execute: 150.7 s
- Batched execute wall-time: 149.5 s
- Sync batched wall-time: 127.0 s
- Async batched wall-time: 22.4 s
- Non-batched execute wall-time: 1.2 s
- Batch size: sync 50 tests/process, async 50 tests/process
- Workers: 7 (`cpu - 1`)

The two pre-existing slow `Array.prototype.{every,some}` tests still exceed the
3 s slow-test threshold (~7.3 s and ~7.4 s) and remain in the non-fully-passing
list as `SLOW_*` partials.

## Per-Test Timing

- Timing rows: 40,262 tests
- Sum of per-test elapsed time: 594.756 s
- Average per-test elapsed time: 14.772 ms
- Max per-test elapsed time: 7.433796 s
- Max test: `built_ins_Array_prototype_some_15_4_4_17_7_c_ii_2_js`
- Slow tests >= 3 s: 4 data rows

## Memory Summary

- Memory rows: 40,262 tests
- Peak RSS: 740.6 MB
- Peak RSS test: `built_ins_RegExp_property_escapes_generated_Join_Control_js`
- Average RSS delta/test: +2108.0 KB
- Largest single-test growth: 551.4 MB
- Largest growth test: `built_ins_Array_prototype_some_15_4_4_17_7_c_ii_2_js`
- Tests over 1 MB growth: 22,763
- Tests over 10 MB growth: 741

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 7.433796 | `built_ins_Array_prototype_some_15_4_4_17_7_c_ii_2_js` |
| 7.276860 | `built_ins_Array_prototype_every_15_4_4_16_7_c_ii_2_js` |
| 3.717916 | `built_ins_decodeURIComponent_S15_1_3_2_A2_5_T1_js` |
| 3.687345 | `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js` |

## Failure Summary by Feature

| Feature | Failures |
| --- | ---: |
| regexp-v-flag | 59 |
| resizable-arraybuffer | 52 |
| regexp-unicode-property-escapes | 32 |
| top-level-await | 20 |
| ArrayBuffer | 11 |
| arraybuffer-transfer | 11 |
| TypedArray | 9 |
| promise-with-resolvers | 3 |
| SharedArrayBuffer | 2 |

Remaining `regexp-v-flag` failures cover compound `\p{StringProperty}` cases the
Layer-3 tables don't yet expand (eg. nested intersections involving string
properties). `resizable-arraybuffer` residual is the 29 deferred tests called
out in §11 of the Js54 proposal.

## Captured Files

| File | Purpose |
| --- | --- |
| `README.md` | this report |
| `t262_timing_release.tsv` | raw release timing data |
| `t262_memory_release.tsv` | raw release RSS data |
| `top_slow_tests.tsv` | sorted timing data in seconds |
| `slow_tests_ge_3s.tsv` | slow-test subset at or above 3 s |
| `top_memory_delta_mb.tsv` | sorted RSS delta in MB |
| `top_peak_rss_mb.tsv` | sorted post-test peak RSS in MB |
| `test262_baseline_at_run.txt` | baseline snapshot at capture time |
| `t262_partial_at_run.txt` | non-fully-passing snapshot at capture time |
| `commit.txt` | base commit + lambda-test commit recorded by the release run |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
| `failure_manifest.tsv` | full failure manifest, 141 rows |
| `failure_by_feature.tsv` | failure summary grouped by feature |
| `failure_by_path.tsv` | failure summary grouped by path |

