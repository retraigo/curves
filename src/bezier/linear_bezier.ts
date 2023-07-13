import { uniform } from "../util/uniform.ts";

/**
 * A linear bezier is a curve, or rather a straight line, between two given points P0 and P1.
 * @param num_points Number of points to obtain.
 * @returns An array of (x, y) points.
 */
export default function linearBezier(num_points: number): [number, number][] {
  const res = new Array<[number, number]>(num_points);
  const points_1d = uniform(num_points);
  let i = 0;
  while(i < num_points) {
    res[i] = [points_1d[i], points_1d[i]];
    i += 1;
  }
  return res;
}