let num: { x: number; y: number } = { x: 1, y: 4 };
console.log(num);

// optionaal
let num1: { x: number; y?: number } = { x: 1 };

// interface

interface Point {
  x: number;
  y: number;
}
let p1: Point = { x: 100, y: 100 };

type MyPoint = {
  x: number;
  y: number;
};

let p2: MyPoint = { x: 100, y: 100 };
