/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/** The arithmetic mean of `values`, or `NaN` for an empty array. */
export function mean(values: number[]): number {
  if (values.length === 0) return NaN;
  let sum = 0;
  for (const value of values) sum += value;
  return sum / values.length;
}
