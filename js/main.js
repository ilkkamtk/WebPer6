'use strict';

const inputElement = document.querySelector('input');
const reader = new FileReader();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const img = document.createElement('img');
const zoom = document.querySelector('#zoom');
const upDown = document.querySelector('#upDown');
const leftRight = document.querySelector('#leftRight');
let width = 200;
let height = 200;
let x = 0;
let y = 0;

const redraw = () => {
  console.log(width);
  console.log(height);
  console.log(x);
  console.log(y);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img, x, y, width, height);
}

inputElement.addEventListener('change', (evt) => {
  const file = inputElement.files[0];
  reader.readAsDataURL(file);
});

reader.addEventListener('load', (evt) => {
  img.src = reader.result;
});

img.addEventListener('load', (evt) => {
  ctx.drawImage(img, x, y, width, height);
});

zoom.addEventListener('input', (evt) => {
  width = 200 * zoom.value;
  height = 200 * zoom.value;
  redraw();
});

upDown.addEventListener('input', (evt) => {
  y = upDown.value;
  redraw();
});

leftRight.addEventListener('input', (evt) => {
  x = leftRight.value;
  redraw();
});

