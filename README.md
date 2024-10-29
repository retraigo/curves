# curves
Functions to generate various curves in TypeScript

## Example

Generate a cubic bezier:

```ts
import { svgChart, cubicBezier } from "@retraigo/curve";

const pts = cubicBezier(20, .17, .67, .83, .67)

const x = pts.map(x => x[0])
const y = pts.map(x => x[1])

// Plot the points on a 100 x 100 scatter chart
const svg = svgChart(x, y, [100, 100], true, .1)

Deno.writeTextFile("bezier.svg", svg)
```