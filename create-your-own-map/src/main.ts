import './style.css'
import { Graph } from "./services/Graph.ts";
import { Point } from "./services/Point.ts";
import { Segment } from "./services/Segment.ts";
import { GraphEditor } from "./services/GraphEditor.ts";

const canvas = document.querySelector('canvas')!

const context = canvas.getContext('2d')!

const p1 = new Point(200, 200)
const p2 = new Point(500, 200)
const p3 = new Point(400, 400)
const p4 = new Point(100, 300)

const s1 = new Segment(p1, p2)
const s2 = new Segment(p1, p3)

const graph = new Graph([p1, p2, p3, p4], [s1, s2])
const graphEditor = new GraphEditor(canvas, graph)

animate()

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  graphEditor.display()
  requestAnimationFrame(animate)
}