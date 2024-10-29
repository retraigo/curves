import { uniform } from "../util/uniform.ts";

/**
 * A linear bezier is a curve, or rather a straight line, between two given points P0 and P1.
 * @param numPoints Number of points to obtain.
 * @returns An array of (x, y) points.
 */
export default function linearBezier(numPoints: number): [number, number][] {
  const res = new Array<[number, number]>(numPoints);
  const points_1d = uniform(numPoints);
  let i = 0;
  while(i < numPoints) {
    res[i] = [points_1d[i], points_1d[i]];
    i += 1;
  }
  return res;
}