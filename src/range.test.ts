import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, sign } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("sign returns 1 for positive values", () => {
  for (const value of [1, 0.5, Number.MIN_VALUE, Infinity]) {
    assert.equal(sign(value), 1);
  }
});

test("sign returns -1 for negative values", () => {
  for (const value of [-1, -0.5, -Number.MIN_VALUE, -Infinity]) {
    assert.equal(sign(value), -1);
  }
});

test("sign returns 0 for both signed zeros", () => {
  assert.equal(sign(0), 0);
  assert.equal(sign(-0), 0);
});

test("sign returns 0 for NaN", () => {
  assert.equal(sign(NaN), 0);
});
