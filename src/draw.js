/*
  * if width is 100px, and i = 0 then  i / width = 0 / 100 = 0 * 255 = 0 => black
  * if width is 100px, and i = 1 then i / width = 0.1 * 255 = 25.5 => black lighter
  * if width is 100px, and i = 2 / then i / width = 0.2 * 255 = 51.5 => black lighter
  * if width is 1000px, and i = 1000  then i / width = 1000 / 1000 = 1 * 255 = 255 => white
*/
/**
 * Draw a gradient from left to right
 * @param p - the P5 instance
 */
export const drawGredient = (p) => {
  for (let i = 0; i < p.width; i++) {
    p.stroke(i / p.width * 255);
    p.line(i, 0, i, p.height);
  }
}

/*
  * p.width / 2, p.height / 2 => center of the canvas
  * p.noFill() => no fill for the circle so we can see 
  * the contained concentric circles
*/
/**
 * Draw a bunch of concentric circles
 * @param p - the p5 object
 * @param density - the distance between each circle
 */
export const drawConcentricCircles = (p, density) => {
  p.noFill()

  for (let i = 50; i < 700; i += density) {
    p.ellipse(p.width / 2, p.height / 2, i, i);
  }
}


/*
  * Nested loops draw a grid of objects using width and height of the canvas as 
  * the grid size, and the radius of the objects as the grid spacing between objects.
  * I used stroke(1).noFill() on ellipee so we can see the grid lines 
  * because drawGredientCursor changes the stroke and the background rules.
*/
/**
 * Draw a grid of circles
 * @param p - the P5 instance
 * @param density - the distance between each circle
*/
export const drawCiclesGrid = (p, density) => {
  p.background(255)

  for (let x = 50; x <= p.width - 50; x += density) {
    for (let y = 50; y <= p.height - 50; y += density) {
      p.ellipse(x, y, 40, 40).stroke(1).noFill();
    }
  }
}

/*
  * p.strokeWeight(count * 0.1) => the stroke weight is set to the count * 0.1
  * count += 1 => increment the count by 1 for each circle which increases the weight of the stroke
  * p.ellipse(x, y, 20, 20); => draw a circle at the x and y position of each iteration of the 
  *  loop with a radius of 20
  * p.width - 50 => to leave a right & left margin of 50px
  * p.height - 50 => to leave a top & bottom margin of 50px
*/
/**
 * Draws a grid of circles with fading opacity from right to left and top to bottom
 * @param p - The p5 instance.
*/
export const drawCiclesFadingGrid = (p, density) => {
  let count = 1

  for (let x = 50; x <= p.width - 50; x += density) {
    for (let y = 50; y <= p.height - 50; y += density) {
      p.strokeWeight(count * 0.1);
      p.ellipse(x, y, 20, 20);
      count++
    }
  }
}

/*
  * p.width - 50 => width of the canvas - 50 to leave a margin of 50px
  * p.height - 50 => height of the canvas - 50 to leave a margin of 50px
  * x => x coordinates of the X object
  * y => y coordinates of the X object
  * x - 5, y - 5 => is the top left corner coordinates of the X object
  * x + 5, y + 5 => is the bottom right corner coordinates of the X object 
*/
/** 
  * Draws a grid of Xs using width and height of the canvas as
  * the grid size, and the density as the grid spacing between grid objects (X)
  * @param p - the p5 instance
*/
export const drawXsGrid = (p, density) => {

  for (let x = 50; x < p.width - 50; x += density) {
    for (let y = 50; y < p.height - 50; y += density) {
      /* Drawing a cross. */
      p.line(x - 5, y - 5, x + 5, y + 5);
      p.line(x + 5, y - 5, x - 5, y + 5);
    }
  }
}

/*
  * p.width / 2 => center of the canvas on the x axis
  * p.height / 2 => center of the canvas on the y axis
  * x += density => increment the x cordinate by the density
  * p.line(x, y, p.width / 2, p.height / 2); => draw a line from each 
  *  x and y coordinates to the center of the canvas
*/
/**
  * Draw a line from each point to the vanishing point
  * @param p - the p5 instance
*/
export const drawVanishingPoint = (p, density) => {
  for (let x = 50; x <= p.width - 50; x += density) {
    for (let y = 50; y <= p.height - 50; y += density) {
      p.line(x, y, p.width / 2, p.height / 2);
    }
  }
}

/**
 * If the mouse is on the left side of the screen, draw an ellipse with a fill color of the mouse's x
 * position. If the mouse is on the right side of the screen, draw an ellipse with a fill color of the
 * mouse's y position
 * @param p - the P5 instance
 */
export const drawWithColors = (p) => {
  p.background(255);

  if (p.mouseX < 300) {
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    p.fill(p.mouseX, p.mouseY, 0);
  }
  else {
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    p.fill(0, p.mouseX, p.mouseY);
  }
}

/**
 * Draws a gradient cursor that changes color depending on the mouse position
 * @param p - the p5 object
 */
export const drawGredientCursor = (p) => {
  let grey = p.map(p.mouseX, 0, p.width, 0, 255);

  p.background('grey');
  p.fill(grey);
  p.ellipse(p.mouseX, p.mouseY, 50, 50).noStroke();
}
