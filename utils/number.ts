/**
 * Return a number constrained between lower and upper bounds.
 *
 * @param value - Input value to constrain
 * @param low - Lower bound
 * @param high - Upper bound
 * @returns Number clamped between `x` and `y`
 *
 */
export const clamp = (value: number, low: number, high: number): number =>
  Math.min(Math.max(value, low), high)

export const mapRange = (
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
) => ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
