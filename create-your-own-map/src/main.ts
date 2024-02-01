import './style.css'
import { Graph } from "./services/Graph.ts";
import { Point } from "./services/Point.ts";

const canvas = document.querySelector('canvas')!

const context = canvas.getContext('2d')!

const p1 = new Point(200, 200)
const p2 = new Point(500, 200)
const p3 = new Point(400, 400)
const p4 = new Point(100, 300)

const graph = new Graph([p1, p2, p3, p4])

graph.draw(context)