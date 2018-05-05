let a = 2;
let b = 3;
let n;

function add(a,b) {
  return a + b;
}

function subtract (a,b){
  return a - b;
}

function multiply (a, b){
  return a * b;
}

function divide (a, b){
  return a / b;
}

function inc(n){
  n++;
  return n;
}

function dec(n){
  n--;
  return n;
}

function makeInt(n, base){
 parseInt(n, base);
 if (n){
   return n;
 } else {
   return 0;
 }
 }
}

function preserveDecimal(n) {
  parseFloat(n);
  return +n;
}