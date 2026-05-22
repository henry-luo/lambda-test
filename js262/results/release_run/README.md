# JS262 Release Run Report

## Run Identity

- Date: 2026-05-22
- Commit: `d6092bc8ae97258b49a587fd318be181df4cbb17`
- Runtime under test: existing release `lambda.exe`; no rebuild was performed for this run.
- Binary sizes observed before the run:
  - `lambda.exe`: 13M, modified 2026-05-22 08:42
  - `test/test_js_test262_gtest.exe`: 2.8M, modified 2026-05-22 08:48

## Command

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --write-failures=temp/js262_release_run_failures.tsv --feature-summary --js-timeout=30
```

The command exited with status `0`.

## Counts

- Baseline loaded: 34,071 passing tests
- Prepared files: 42,219
- Batched scripts: 34,163
- Fully passed: 34,071 / 34,163, or 99.7%
- Non-fully-passing: 0
- Failed: 92 known failing tests
- Skipped: 8,056
- Improvements vs baseline: 0
- Regressions vs baseline: 0
- Slow tests at `>= 3s`: 0

## Phase Timing

| Phase | Release | Debug Run | Delta |
| --- | ---: | ---: | ---: |
| Prepare | 0.1s | 0.3s | -0.2s |
| Batch execute | 302.5s | 586.2s | -283.7s |
| Eval/report | 0.3s | 0.4s | -0.1s |
| Pre-retry total | 303.3s | 587.1s | -283.8s |
| Isolated retry | 0.0s | no aggregate printed; 38 tests retried | release avoided retries |

The release batch execution was about 1.94x faster than the debug run.

## Per-Test Timing

- Raw timing file: `t262_timing_release.tsv`
- Sorted timing file: `top_slow_tests.tsv`
- Slow subset: `slow_tests_ge_3s.tsv`, empty for this run

Per-test timing summary:

- Count: 34,163
- Sum of per-test elapsed times: 685.072s
- Average per-test elapsed time: 20.053ms
- Max per-test elapsed time: 2.762062s
- Max test: `language_identifiers_start_unicode_10_0_0_escaped_js`

Debug comparison:

- Debug per-test sum: 1,887.041s
- Debug average per-test elapsed time: 55.236ms
- Debug max per-test elapsed time: 23.040465s
- Debug slow tests at `>= 3s`: 33

## Memory Summary

- Tests with memory data: 34,163 / 34,163
- Peak RSS: 990.8 MB
- Peak RSS test: `language_identifiers_start_unicode_5_2_0_class_escaped_js`
- Minimum RSS: 41.9 MB
- Average RSS delta/test: +2,338.4 KB
- Largest single-test growth: 205.6 MB
- Largest growth test: `language_identifiers_start_unicode_10_0_0_escaped_js`
- Tests over 1 MB growth: 14,127
- Tests over 10 MB growth: 845

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 2.762062 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 2.480384 | `language_identifiers_start_unicode_10_0_0_js` |
| 2.101679 | `language_identifiers_start_unicode_8_0_0_js` |
| 2.010156 | `language_identifiers_start_unicode_9_0_0_js` |
| 1.929938 | `built_ins_RegExp_character_class_escape_non_whitespace_js` |
| 1.887044 | `language_identifiers_start_unicode_5_2_0_escaped_js` |
| 1.867863 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 1.863903 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 1.711028 | `language_identifiers_start_unicode_5_2_0_js` |
| 1.676932 | `language_identifiers_start_unicode_13_0_0_js` |

## Captured Files

| File | Purpose |
| --- | --- |
| `README.md` | this report |
| `t262_timing_release.tsv` | raw release timing data |
| `t262_memory_release.tsv` | raw release RSS data |
| `failures.tsv` | runner failure manifest |
| `failures_by_feature.tsv` | feature-level failure summary |
| `failures_by_path.tsv` | path-level failure summary |
| `top_slow_tests.tsv` | sorted timing data in seconds |
| `slow_tests_ge_3s.tsv` | slow-test subset at or above 3s |
| `top_memory_delta_mb.tsv` | sorted RSS delta in MB |
| `top_peak_rss_mb.tsv` | sorted post-test peak RSS in MB |
| `commit.txt` | commit hash at capture time |
| `git_status_short.txt` | working-tree status at capture time |

## Debug vs Release Summary

The release run matches the JS262 baseline. The earlier debug run did not: it had 4 true regressions after isolated retry and 67 non-fully-passing tests.

| Metric | Release Run | Debug Run |
| --- | ---: | ---: |
| Baseline passing | 34,071 | 34,071 |
| Fully passed | 34,071 / 34,163 | 34,033 / 34,163 |
| Non-fully-passing | 0 | 67 |
| Regressions vs baseline | 0 | 4 after retry |
| Slow tests `>= 3s` | 0 | 33 |
| Exit code | 0 | 1 |

Phase comparison:

| Phase | Release | Debug | Difference |
| --- | ---: | ---: | ---: |
| Prepare | 0.1s | 0.3s | -0.2s |
| Batch execute | 302.5s | 586.2s | -283.7s |
| Eval/report | 0.3s | 0.4s | -0.1s |
| Pre-retry total | 303.3s | 587.1s | -283.8s |
| Isolated retry | 0.0s | 38 tests retried | release avoided retry |

Per-test timing comparison:

| Metric | Release | Debug |
| --- | ---: | ---: |
| Per-test elapsed sum | 685.072s | 1,887.041s |
| Average per test | 20.053ms | 55.236ms |
| Max test time | 2.762s | 23.040s |

Memory comparison:

| Metric | Release | Debug |
| --- | ---: | ---: |
| Peak RSS | 990.8 MB | 789.2 MB |
| Largest single-test growth | 205.6 MB | 209.6 MB |
| Tests over 1 MB growth | 14,127 | 14,517 |
| Tests over 10 MB growth | 845 | 908 |

The release batch execution was about 1.94x faster than debug. The per-test elapsed sum improved by about 2.75x. Release also eliminated all `>= 3s` slow tests under the runner's slow-test threshold.
