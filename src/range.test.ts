import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, midpoint } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("midpoint finds the number halfway between", () => {
  assert.equal(midpoint(2, 8), 5);
  assert.equal(midpoint(8, 2), 5);
});

test("midpoint works across zero", () => {
  assert.equal(midpoint(-4, 4), 0);
});
