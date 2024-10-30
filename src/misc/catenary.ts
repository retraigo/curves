import { uniform } from "../util/uniform.ts";

/**
 * A hanging curve.
 * @param numPoints Number of points to generate.
 * @param stretch A parameter to control how lose the curve is.
* @returns Array of (x, y) coordinates.
 */

export default function catenary(
  numPoints = 100,
  stretch = 1,
): [number, number][] {
  const res: [number, number][] = uniform(numPoints, -1, 1)
    .map((t) => [t, t]);
  let i = 0;
  while (i < numPoints) {
    res[i][1] = stretch * Math.cosh(res[i][0] / stretch);
    i += 1;
  }
  return res;
}
