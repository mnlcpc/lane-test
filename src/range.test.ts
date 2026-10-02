import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, median } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("median returns the middle value for an odd count", () => {
  assert.equal(median([3, 1, 2]), 2);
});

test("median averages the two middle values for an even count", () => {
  assert.equal(median([4, 1, 3, 2]), 2.5);
});

test("median does not mutate its input", () => {
  const values = [3, 1, 2];
  median(values);
  assert.deepEqual(values, [3, 1, 2]);
});

test("median of an empty array is NaN", () => {
  assert.ok(Number.isNaN(median([])));
});
