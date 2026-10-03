import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, lerpClamped } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("lerpClamped interpolates between a and b", () => {
  assert.equal(lerpClamped(0, 10, 0), 0);
  assert.equal(lerpClamped(0, 10, 0.5), 5);
  assert.equal(lerpClamped(0, 10, 1), 10);
  assert.equal(lerpClamped(10, 20, 0.25), 12.5);
});

test("lerpClamped clamps t to [0, 1]", () => {
  assert.equal(lerpClamped(0, 10, -1), 0);
  assert.equal(lerpClamped(0, 10, 2), 10);
  assert.equal(lerpClamped(10, 0, 1.5), 0);
});
