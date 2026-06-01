# JS262 Release Run 006 Report

## Run Identity

- Date captured: 2026-05-30
- Source run: latest release `--update-baseline` js262 run completed before this snapshot.
- Base commit recorded by run: `2192fd58d`
- Capture-time Lambda HEAD: `5035fa6a8840b6026647c921c0142ccc2e98ac8f`
- lambda-test commit recorded by run: `8a325d7de`
- Runtime under test: release `lambda.exe`
- GTest harness: release `test/test_js_test262_gtest.exe`
- Host capacity from baseline: 8 CPU cores, 24.0 GiB memory
- Scope: ES2023, skipping ES2024+ features

## Compliance Summary

- Fully passed: 39,258 / 39,258 (100.0%)
- Total discovered tests: 42,295
- Skipped: 3,037
- Batched: 39,258
- Non-fully-passing: 0
- Failed: 0
- Improvements vs prior baseline: 12
- Regressions vs baseline: 0
- Failure manifest rows: 0 data rows

## Runtime Summary

- Total wall-time: 147.5 s
- Prepare: 0.0 s
- Execute: 147.4 s
- Batched execute wall-time: 145.6 s
- Sync batched wall-time: 128.0 s
- Async batched wall-time: 17.6 s
- Non-batched execute wall-time: 1.7 s
- Batch size: sync 50 tests/process, async 50 tests/process
- Workers: 7 (`cpu - 1`)

The two entries in `t262_slow.txt` were executed, not skipped. They ran as
one-test slow batches with the 5 s gate and both passed.

## Per-Test Timing

- Timing rows: 39,258 tests
- Sum of per-test elapsed time: 516.889 s
- Average per-test elapsed time: 13.166 ms
- Max per-test elapsed time: 5.876359 s
- Max test: `built_ins_decodeURIComponent_S15_1_3_2_A2_5_T1_js`
- Slow tests >= 3 s: 2 data rows

## Memory Summary

- Memory rows: 39,258 tests
- Peak RSS: 1145.8 MB
- Peak RSS test: `language_identifiers_val_class_via_escape_hex4_js`
- Average RSS delta/test: +2777.6 KB
- Largest single-test growth: 208.8 MB
- Largest growth test: `language_identifiers_start_unicode_10_0_0_escaped_js`
- Tests over 1 MB growth: 23,711
- Tests over 10 MB growth: 1,387

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 5.876359 | `built_ins_decodeURIComponent_S15_1_3_2_A2_5_T1_js` |
| 5.684739 | `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js` |
| 2.481282 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 2.080917 | `language_identifiers_start_unicode_8_0_0_js` |
| 2.060462 | `language_identifiers_start_unicode_10_0_0_js` |
| 1.410680 | `language_identifiers_start_unicode_9_0_0_js` |
| 1.407992 | `language_identifiers_start_unicode_5_2_0_js` |
| 1.267074 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 1.212837 | `language_identifiers_start_unicode_16_0_0_js` |
| 1.202714 | `language_identifiers_start_unicode_5_2_0_escaped_js` |

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
| `commit.txt` | base commit recorded by the release run |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
| `failure_manifest.tsv` | failure manifest from the run, header only for this clean run |
| `failure_by_feature.tsv` | failure summary by feature, header only for this clean run |
| `failure_by_path.tsv` | failure summary by path, header only for this clean run |
