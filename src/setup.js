import {
  drawConcentricCircles,
  drawCiclesGrid,
  drawCiclesFadingGrid,
  drawXsGrid,
  drawVanishingPoint,
  drawGredientCursor
} from './draw'

/* option is the index of the draw function */
let opt = 0

/* An array of all the draw functions */
const opts = [
  drawCiclesGrid,
  drawConcentricCircles,
  drawXsGrid,
  drawVanishingPoint,
  drawCiclesFadingGrid,
  drawGredientCursor,
]

/**
 * Create a canvas with the same dimensions as the window and append it to the DOM
 * @param p - the p5 instance
 */
const setupCanvas = (p) => {
  p.createCanvas(p.windowWidth, p.windowHeight)
  p.noFill();
}

/**
 * Resize the canvas to the size of the window
 * @param p - the p5 instance
 */
const resizeWindow = (p) => {
  p.resizeCanvas(p.windowWidth, p.windowHeight)
}


/**
 * Draw the canvas 
 * @param p - the p5 instance
 */
const draw = (p) => {
  /*
    * Creating a density map of all potential positions 
    * of the grid item based on the mouse position. 
  */
  const density = p.map(p.mouseX, 0, p.width, 20, 50);
  p.background(255);

  return opts[opt](p, density)
}

/**
 * When the mouse is pressed,
 * increment the variable opt, which is used to select the current option from the
 * array opts. If opt is equal to the length of the array, reset it to zero
 * @param p - the P5 object
 */
function mousePressed(p) {
  opt++
  if (opt === opts.length) {
    opt = 0
    p.strokeWeight(1);
    p.background(255);
  }
}

/**
 * It sets up, draws, and resizes the canvas.
 * @param p - The p5 instance.
 */
export default function renderCanvas(p) {
  p.setup = () => setupCanvas(p);
  p.draw = () => draw(p)
  p.windowResized = () => resizeWindow(p);
  p.mousePressed = () => mousePressed(p);
}
