import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, clamp01 } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("clamp01 keeps values inside", () => {
  assert.equal(clamp01(0), 0);
  assert.equal(clamp01(0.5), 0.5);
  assert.equal(clamp01(1), 1);
});

test("clamp01 raises values below 0", () => {
  assert.equal(clamp01(-0.5), 0);
});

test("clamp01 lowers values above 1", () => {
  assert.equal(clamp01(2), 1);
});
