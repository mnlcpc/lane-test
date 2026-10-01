import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, normalize } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("normalize maps a value into [0, 1]", () => {
  assert.equal(normalize(5, 0, 10), 0.5);
  assert.equal(normalize(0, 0, 10), 0);
  assert.equal(normalize(10, 0, 10), 1);
  assert.equal(normalize(15, 10, 20), 0.5);
});

test("normalize throws a RangeError when min equals max", () => {
  assert.throws(() => normalize(5, 3, 3), RangeError);
});
