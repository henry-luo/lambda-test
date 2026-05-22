# JS262 Debug Run Report

## Run Identity

- Date: 2026-05-22 08:26:30 +08
- Repository: `/Users/henryluo/Projects/Lambda`
- Commit: `d6092bc8ae97258b49a587fd318be181df4cbb17`
- Branch: detached HEAD, or no branch name reported by `git branch --show-current`
- Working tree at capture time:
  - `M test/test_gif_player_gtest.cpp`
  - `M test/test_lottie_player_gtest.cpp`
- Runtime under test: existing debug `lambda.exe`; no rebuild was performed for this run.
- Binary sizes:
  - `lambda.exe`: 19M, modified 2026-05-22 08:00
  - `test/test_js_test262_gtest.exe`: 2.8M, modified 2026-05-22 07:56

## Command

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --write-failures=temp/js262_debug_run_failures.tsv --feature-summary --js-timeout=30
```

The command exited with status `1` because JS262 regressions remained after retry.

## Suite Counts

- Baseline loaded: 34,071 passing tests from `test/js262/test262_baseline.txt`
- Metadata cache loaded: 53,393 entries from `temp/test262_metadata.tsv`
- Partial list loaded: 2 non-fully-passing entries from `test/js262/t262_partial.txt`
- Prepared files: 42,219
- Skipped: 8,054 initial skipped + 2 partial-skipped = 8,056 total skipped
- Batched scripts: 34,163
- Fully passed: 34,033 / 34,163, or 99.6%
- Non-fully-passing: 67
- Failed: 63
- Baseline regressions before isolated retry: 38
- Recovered by isolated retry: 34 / 38
- Remaining true regressions: 4
- Improvements vs baseline: 0
- Slow tests at `>= 3s`: 33

## Phase Timing

| Phase | Timing / Result |
| --- | ---: |
| Phase 1 prepare | 0.3s |
| Phase 2 batch execute | 586.2s |
| Phase 2a partial handling | 2 partial tests skipped |
| Phase 3 evaluate/report | 0.4s |
| Pre-retry total printed by runner | 587.1s |
| Phase 4 isolated retry | runner did not print one aggregate duration |

Phase 4 retried 38 regressions with a 60s isolated timeout. The slowest individual retry batch took 7.0s. The retry diagnostics reported 34 recovered tests from 14 killed batches.

The timing TSV contains per-test runtime in microseconds:

- `t262_timing_o0.tsv`: raw timing data
- `top_slow_tests.tsv`: all tests sorted by elapsed seconds descending
- `slow_tests_ge_3s.tsv`: the 33 tests at or above 3s

## Memory Summary

- Tests with memory data: 34,163 / 34,163
- Peak RSS: 789.2 MB
- Peak RSS test: `language_identifiers_start_unicode_17_0_0_escaped_js`
- Minimum RSS: 23.3 MB, as reported by the runner
- Average RSS delta/test: +2,292.6 KB, as reported by the runner
- Largest single-test growth: 209.6 MB
- Largest growth test: `language_identifiers_start_unicode_10_0_0_escaped_js`
- Tests over 1 MB growth: 14,517
- Tests over 10 MB growth: 908

The memory TSV stores RSS values in KB:

- `t262_memory_o0.tsv`: raw memory data
- `top_memory_delta_mb.tsv`: tests sorted by RSS growth in MB
- `top_peak_rss_mb.tsv`: tests sorted by post-test RSS in MB

## Remaining True Regressions

All 4 true regressions fail with:

`Uncaught TypeError: Object.defineProperty called on non-object`

| Test | Category |
| --- | --- |
| `language_expressions_class_cpn_class_expr_fields_computed_property_name_from_yield_expression_js` | `language/expressions`, class fields, computed property names, generators |
| `language_expressions_class_cpn_class_expr_fields_methods_computed_property_name_from_yield_expression_js` | `language/expressions`, class fields, computed property names, generators |
| `language_statements_class_cpn_class_decl_fields_computed_property_name_from_yield_expression_js` | `language/statements`, class fields, computed property names, generators |
| `language_statements_class_cpn_class_decl_fields_methods_computed_property_name_from_yield_expression_js` | `language/statements`, class fields, computed property names, generators |

The matching rows are preserved in `failures.tsv`.

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 23.040465 | `built_ins_RegExp_character_class_escape_non_whitespace_js` |
| 9.971373 | `language_literals_regexp_S7_8_5_A2_1_T2_js` |
| 9.913180 | `language_identifiers_start_unicode_10_0_0_js` |
| 9.898327 | `language_identifiers_start_unicode_9_0_0_js` |
| 9.390553 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 9.333275 | `built_ins_TypedArrayConstructors_ctors_bigint_typedarray_arg_src_typedarray_not_big_throws_js` |
| 9.098485 | `language_literals_regexp_S7_8_5_A2_4_T2_js` |
| 8.777064 | `annexB_built_ins_RegExp_RegExp_trailing_escape_BMP_js` |
| 8.714644 | `annexB_built_ins_RegExp_RegExp_leading_escape_BMP_js` |
| 8.596880 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 8.534716 | `language_identifiers_start_unicode_8_0_0_js` |
| 8.424117 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 7.638257 | `language_identifiers_start_unicode_5_2_0_js` |
| 7.028564 | `language_identifiers_start_unicode_13_0_0_js` |
| 7.018940 | `built_ins_TypedArrayConstructors_ctors_typedarray_arg_src_typedarray_big_throws_js` |

## Top Memory Growth Tests

| MB Delta | Test |
| ---: | --- |
| 209.640625 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 184.875000 | `language_identifiers_start_unicode_5_2_0_escaped_js` |
| 155.281250 | `language_literals_regexp_S7_8_5_A2_1_T2_js` |
| 146.593750 | `language_identifiers_start_unicode_10_0_0_js` |
| 144.578125 | `annexB_built_ins_RegExp_RegExp_leading_escape_BMP_js` |
| 140.125000 | `language_literals_regexp_S7_8_5_A1_4_T2_js` |
| 139.250000 | `language_literals_regexp_S7_8_5_A2_4_T2_js` |
| 137.546875 | `language_literals_regexp_S7_8_5_A1_1_T2_js` |
| 134.531250 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 131.015625 | `language_identifiers_start_unicode_9_0_0_escaped_js` |

## Failure Manifests

- `failures.tsv`: 96 rows, including all failing/non-fully-passing manifest rows emitted by the runner
- `failures_by_feature.tsv`: 20 feature summary rows
- `failures_by_path.tsv`: 5 path summary rows
- `batch_kills.txt`: Phase 4 batch-kill diagnostic, 34 recovered tests from 14 batches

Failure kind counts from `failures.tsv`:

| Failure Kind | Count |
| --- | ---: |
| `assert` | 64 |
| `runtime` | 21 |
| `parse` | 11 |

Path summary:

| Path | Failures |
| --- | ---: |
| `built_ins/RegExp` | 34 |
| `language/expressions` | 16 |
| `language/global_code` | 8 |
| `language/literals` | 1 |
| `language/statements` | 37 |

## Captured Files

| File | Purpose |
| --- | --- |
| `README.md` | this report |
| `t262_timing_o0.tsv` | raw per-test debug/O0 timing data |
| `t262_memory_o0.tsv` | raw per-test RSS data |
| `failures.tsv` | runner failure manifest |
| `failures_by_feature.tsv` | feature-level failure summary |
| `failures_by_path.tsv` | path-level failure summary |
| `batch_kills.txt` | isolated retry and batch-kill diagnostic |
| `top_slow_tests.tsv` | sorted timing data in seconds |
| `slow_tests_ge_3s.tsv` | slow-test subset at or above 3s |
| `top_memory_delta_mb.tsv` | sorted RSS delta in MB |
| `top_peak_rss_mb.tsv` | sorted post-test peak RSS in MB |
| `test262_baseline_at_run.txt` | baseline snapshot used for comparison |
| `t262_partial_at_run.txt` | partial-list snapshot used by the runner |
| `diagnose_list_at_run.txt` | diagnose-list snapshot available at run time |
| `git_status_short.txt` | working-tree status at capture time |
| `git_diff_stat.txt` | local diff stat at capture time |

## Notes

- This is a debug/O0 run. It is useful for correctness and relative debug-run diagnostics, but it should not be used as the release performance baseline.
- The runner wrote timing data to `temp/_t262_timing_o0.tsv` and memory data to `temp/_t262_memory_o0.tsv`; both were copied here without modification.
- Phase 4 recoveries indicate batch-sensitive behavior for 34 tests. Those are preserved in `batch_kills.txt` for follow-up isolation.
