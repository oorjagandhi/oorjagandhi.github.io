import React from "react";
import { ReactP5Wrapper, P5CanvasInstance } from "react-p5-wrapper";

let angle: number;

const Sketch = (p5: P5CanvasInstance) => {
  p5.setup = () => {
    p5.createCanvas(300, 300);
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(150, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(75); // Adjusted initial length of the branch to be between 100 and 50
  };

  const branch = (len: number) => {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 3) { // Adjusted stopping condition to be between 4 and 2
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  };
};

const FractalTree: React.FC = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
