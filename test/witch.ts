import { svgChart, witchOfAgnesi } from "../mod.ts";

const pts = witchOfAgnesi(20, 0.95)

const x = pts.map(x => x[0])
const y = pts.map(x => x[1])

console.log(pts)

const svg = svgChart(x, y, [200, 100], true, 0.1)

Deno.writeTextFile("test/witch.svg", svg)