# JS262 Release Run 005 Report

## Run Identity

- Date captured: 2026-05-29
- Source run: latest release `--update-baseline` js262 run completed before this snapshot.
- Base commit: `ac44e38414c9e3e693368e1d4d6cd36adda34b46`
- lambda-test commit: `808ae491520e874947ea6a56ad1573ea6330521d`
- Runtime under test: release `lambda.exe`
- GTest harness: debug `test/test_js_test262_gtest.exe`
- Host capacity from baseline: 8 CPU cores, 24.0 GiB memory
- Scope: ES2021, skipping ES2022+ features

## Compliance Summary

- Fully passed: 39,135 / 39,135 (100.0%)
- Total discovered tests: 42,295
- Skipped: 3,160
- Batched: 39,135
- Non-fully-passing: 0
- Failed: 0
- Improvements vs prior baseline: 196
- Regressions vs baseline: 0
- Failure manifest rows: 0 data rows

## Runtime Summary

- Total wall-time: 151.3 s
- Prepare: 0.1 s
- Execute: 150.4 s
- Batched execute wall-time: 146.8 s
- Sync batched wall-time: 128.6 s
- Async batched wall-time: 18.2 s
- Non-batched execute wall-time: 3.5 s
- Batch size: sync 50 tests/process, async 50 tests/process
- Workers: 7 (`cpu - 1`)

The two entries in `t262_slow.txt` were executed, not skipped. They ran as
one-test slow batches with the 5 s gate and both passed.

## Per-Test Timing

- Timing rows: 39,135 tests
- Sum of per-test elapsed time: 576.096 s
- Average per-test elapsed time: 14.721 ms
- Max per-test elapsed time: 3.755 s
- Max test: `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js`
- Slow tests >= 3 s: 2 data rows

## Memory Summary

- Memory rows: 39,135 tests
- Peak RSS: 1102.8 MB
- Peak RSS test: `language_identifiers_start_unicode_9_0_0_js`
- Average RSS delta/test: +2715.5 KB
- Largest single-test growth: 205.6 MB
- Largest growth test: `language_identifiers_start_unicode_10_0_0_escaped_js`
- Tests over 1 MB growth: 20,875
- Tests over 10 MB growth: 1,213

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 3.754560 | `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js` |
| 3.733600 | `built_ins_decodeURIComponent_S15_1_3_2_A2_5_T1_js` |
| 1.991454 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 1.731920 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 1.498526 | `language_identifiers_start_unicode_10_0_0_js` |
| 1.405360 | `language_identifiers_start_unicode_9_0_0_js` |
| 1.382576 | `language_identifiers_start_unicode_5_2_0_escaped_js` |
| 1.380857 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 1.334758 | `language_identifiers_start_unicode_13_0_0_js` |
| 1.244774 | `language_identifiers_start_unicode_8_0_0_js` |

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
| `commit.txt` | base commit hash at capture time |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
| `failure_manifest.tsv` | failure manifest from the run, header only for this clean run |
| `failure_by_feature.tsv` | failure summary by feature, header only for this clean run |
| `failure_by_path.tsv` | failure summary by path, header only for this clean run |
