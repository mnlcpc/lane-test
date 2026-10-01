/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/** Rounds `value` to the nearest multiple of `step`. */
export function roundTo(value: number, step: number): number {
  if (!(step > 0)) throw new RangeError(`step must be positive, got ${step}`);
  return Math.round(value / step) * step;
}
