import { Graph } from "./Graph.ts";
import { Point } from "./Point.ts";

export class GraphEditor {
  public canvas: HTMLCanvasElement;
  public graph: Graph;
  public context: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, graph: Graph) {
    this.canvas = canvas
    this.graph = graph
    this.context = canvas.getContext("2d")!
    this.addEventListeners()
  }

  public display() {
    this.graph.draw(this.context)
  }

  private addEventListeners() {
    this.canvas.addEventListener('mousedown',  (event: MouseEvent) => {
      if (event.button === 0) {
        const point = new Point(event.offsetX, event.offsetY)

        this.graph.addPoint(point)
      }
    })
  }
}