/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/** Maps `value` from the range `[min, max]` to `[0, 1]`. */
export function normalize(value: number, min: number, max: number): number {
  if (min === max) throw new RangeError("min and max must differ");
  return (value - min) / (max - min);
}
