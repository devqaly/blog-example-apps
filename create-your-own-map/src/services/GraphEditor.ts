import { Graph } from "./Graph.ts";
import { Point } from "./Point.ts";
import { getNearestPoint } from "./Utils.ts";

export class GraphEditor {
  public canvas: HTMLCanvasElement;
  public graph: Graph;
  public context: CanvasRenderingContext2D
  public selectedPoint: Point | null
  public hoveredPoint: Point | null

  constructor(canvas: HTMLCanvasElement, graph: Graph) {
    this.canvas = canvas
    this.graph = graph
    this.context = canvas.getContext("2d")!
    this.selectedPoint = null
    this.hoveredPoint = null

    this.addEventListeners()
  }

  public display() {
    this.graph.draw(this.context)

    if (this.hoveredPoint) {
      this.hoveredPoint.draw(this.context, { outline: true })
    }
  }

  private addEventListeners() {
    this.canvas.addEventListener('mousedown',  (event: MouseEvent) => {
      if (event.button === 0 && !event.shiftKey) {
        this.addPoint(event)
      }

      if (event.button === 0 && event.shiftKey) {
        this.removePoint(event)
      }
    })

    this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
      this.hoveredPoint = getNearestPoint(new Point(event.offsetX, event.offsetY), this.graph.points)
    })
  }

  private addPoint(event: MouseEvent) {
    const point = new Point(event.offsetX, event.offsetY)

    this.graph.addPoint(point)
  }

  private removePoint(event: MouseEvent) {
    const point = getNearestPoint(new Point(event.offsetX, event.offsetY), this.graph.points)

    if (!point) return

    this.graph.points.splice(this.graph.points.indexOf(point), 1)
  }
}