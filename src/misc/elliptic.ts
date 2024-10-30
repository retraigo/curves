import { uniform } from "../util/uniform.ts";

/**
 * A symmetric curve about the x-axis.
 * @param numPoints Number of points to generate.
 * @returns Array of (x, y) coordinates.
 */

export default function elliptic(
  numPoints = 100,
  a = -1,
  b = 1,
): [number, number][] {
  const res: [number, number][] = uniform(numPoints, 0, 1)
    .map((t) => [t, t]);
  let i = 0;
  while (i < numPoints) {
    const x = res[i][0]
    res[i][1] = Math.sqrt((x ** 3) + a * x + b);
    i += 1;
  }
  return res;
}
