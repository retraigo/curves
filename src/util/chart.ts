import { standardize } from "./standardize.ts";

/**
 * Create an SVG chart
 * @param x X axis points
 * @param y Y axis points
 * @param size Size of the image
 * @param scatter Whether to use scatter points instead of lines
 */
export function svgChart(
  x: number[],
  y: number[],
  size: [number, number],
  scatter = false,
  padding = 0.2
): string {
    
  x = standardize(x, [0 + padding, 1 - padding]);
  y = standardize(y, [0 + padding, 1 - padding]);

  const res = {
    size: Math.max(...size),
    viewbox: `-0 -0 1 1`,
    paths: [
      `M -0 -0 L -0 1 L 1 1 L 1 -0 L -0 -0 M ${x[0]} ${1 - y[0]}`,
    ],
  };
  let i = 0;
  while (i < x.length) {
    if (scatter) {
      res.paths[0] += ` M ${x[i]} ${
        1 - y[i]
      } l 0.005 0.005 l -0.01 -0.01 l 0.005 0.005 l 0.005 -0.005 l -0.01 0.01`;
    } else res.paths[0] += ` L ${x[i]} ${1 - y[i]}`;
    i += 1;
  }
  const response = {
    ...res,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${size[0]}" height="${
      size[1]
    }" viewBox="${
      res.viewbox
    }" fill="white" stroke="black" stroke-width="0.005">${res.paths
      .map((x) => `<path d = "${x}" />`)
      .join("")}</svg>`,
  };
  return response.svg;
}
