// Primitive Type Inference

let productPrice = 25;
// productPrice => number

let customerName = 'Nguyen';
// customerName => string

// Array Inference

let temperatures = [28, 30, 32];
// temperatures => number[]

// Union Type Inference

let examResults = [95, null, 88];
// examResults => (number | null)[]

// Contextual Typing

window.addEventListener('click', (mouseEvent) => {
  console.log(mouseEvent.clientX);
  console.log(mouseEvent.clientY);
});
