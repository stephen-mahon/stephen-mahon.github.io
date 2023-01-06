let lines = [];
let elves = [];
let input;
let binWidth;

let maxCal = 0;
let n = 0;

function preload() {
  input = loadStrings("input.txt");
}

function setup() {
  canvas = createCanvas(710, 400);
  canvas.parent('simple-sketch-holder');
  let calories = [];  
  // sorting only half the array!
  for (let i = 0; i < input.length; i++) {
    let value = parseFloat(input[i]);
    if (value) {
      calories.push(value);
    } else {
      elves.push(total(calories));

      if (sum(calories) > maxCal) {
        maxCal = sum(calories);
      }
      calories= [];
    }
  }


  binWidth = 0.99*width/elves.length;

}

function draw() {
  background(50);

  for (let i = 0; i < elves.length; i++) {
    stroke(0);
    rect(i*binWidth, 0, binWidth, map(elves[i], 0, maxCal, 0, 0.99*height))
  }

  if (n < elves.length) {
    for(let i = 0; i < elves.length - n - i; i++) {
      let a = elves[i];
      let b = elves[i+1];
      if (a < b) {
        swap(elves, i, i+1);
      }
    }
  } else {
    console.log("Complete");
    noLoop();
  }
  n++
}

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function sum(vals) {
  let sum = 0;
  for (let i = 0; i < vals.length; i++) {
    sum+=vals[i];
  }
  return sum;
}

function total(vals) {
  let total = 0;
  for (let i = 0; i < vals.length; i++) {
    total = total + vals[i];
  }
  return total;
}