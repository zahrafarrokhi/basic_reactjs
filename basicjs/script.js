// console.log('abc')
// console.log(2+2)
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
console.log(z)

// if else
hour = 12;

if (hour >= 6 && hour < 12){
  console.log('good morning');
}
else if (hour >= 12 && hour < 18)
{
  console.log('good afternoon');
}
else {
  console.log('good evening')
}

// switch-case

let role = 'cool';

switch(role) {
  case "guest":
    console.log('guest')
    break;
  case "admin":
    console.log('admin')
    break;
  default:
    console.log('unknown user')
}

if (role === 'guest') {
  console.log('guest')
}
else if(role === 'admin') {
  console.log('admin')
}
else {
  console.log('unknown user')
}

// for

for(let i=0;i<5;i++){
  console.log('hello');
}

// for(let i=0; i<5; i--){
//   console.log('bye');
// }


for (let i = 0; i < 10; i++){
  if (i % 2 == 0)
    console.log(i,'even');
  else 
  console.log(i,'odd');
}

// while

let i = 0;
while( i< 5 ){
  console.log(i,'while');
  i++
}

// do while
// 1.
let a = 0;
do {
  console.log(a,'do while');
  a++
}
while (a < 5);
// 2.
let a1 = 10;
do {
  console.log(a1);
  a1++
}
while (a1 < 5);

// for in
// object
const person = { name: "zahra", age: "30" }

for (let key in person) {
  
  // console.log(key);
  console.log(person[key]);

}
  
// array
const colors = ['red','green','blue']

for(let index in colors)
  {
    // console.log(index);
    console.log(colors[index]);
}
  
// for of
const colors1 = ['white','black']

for(let color of colors1)
  {
      console.log(color);
}
  
// break
let b = 0;
while (b < 10) {
  if(b == 5){break;}
  console.log(b,'break');
  b++
  
}


// continue
let d = 0;
while (d < 10) {
  // 5 does not run
  if(d == 5){
    // Avoid the Infinite Ring
    d++
    continue;
    }
  console.log(d,'continue');
  d++
  
}
// object
let circle = {
  radius :1,
  // x:1,
  // y:1,
  location: {
    x: 1,
    y:1,
  },
  isVisiable: true,
  draw :function() {console.log("draw")}
}
// method
circle.draw();

// let circle1 = {
//   radius :2,
//   // x:1,
//   // y:1,
//   location: {
//     x: 2,
//     y:2,
//   },
//   isVisiable: true,
//   draw :function() {console.log("draw")}
// }

// Factory function
// camel notation:oNeTwoThree
// return
function createCircle(radius) {

  return {
    // radius: radius, 
    radius,
    // draw :function() {console.log("draw")}
    draw() { console.log("draw") }

  }
}

let circle1 = createCircle(1);
console.log(circle1);
  
let circle2 = createCircle(2);
console.log(circle2);

const myCircle = createCircle(3)
console.log(myCircle);
console.log(myCircle.constructor);
console.log(myCircle.radius)


// Constructor function
// pascal notation:ONeTwoThree
// new
function Circle(radius) {   
    this.radius = radius;    
    this.draw = function(){ console.log("draw") }  
  
}
const circle3 = new Circle(3);

console.log(circle3)
console.log(circle3.constructor);
console.log(Circle.length)
console.log(Circle.name)


// dynamic object
const circle2000 = {
  radius:1
}
circle2000.color = "red"
circle2000.draw= function() {
  
}
console.log(circle2000)

// delete object
delete circle2000.color;
console.log(circle2000)


// value types
let xz = 10;
let bz = xz;
console.log(bz) 
// out = > 10
xz = 20;
console.log(xz)
// out = > 20
console.log(bz)
// out = > 10

// Reference types
let xb = {value:10};
let yb = xb ;
xb.value = 20;
console.log(xb);
console.log(yb);

//  value types and scope
let number = 10;
function increase(number) {
  number++
}
increase(number);
console.log(number);
//out=> 10

//  Reference types and scope
let obj = { value: 10 };
function increase(obj) {
  obj.value++
}
increase(obj);
console.log(obj);
// out =>11

// for in 
const circleabc = {
  radius:1,
  draw(){console.log('darw')}
}

console.log(circleabc)
for (let key in circleabc) {
  // radius
  // draw
  // console.log(key)
  console.log(circleabc[key])
  // 1
  // ƒ draw(){console.log('darw')}
}

// Object.keys()
let circlekeys = Object.keys(circleabc)
console.log(circlekeys)

// for or
for (let key of circlekeys) {
  console.log(key);
}


// clone object
const circle100 = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}
// 1.
// const another = {}

// for (let key in circle100) {
//   another[key] = circle100[key]
// }
// 2.
// const another = Object.assign({color:'red'},circle)
// 3.
const another = {...circle}
console.log(another);


// math
function getRandom(min, max) {
  return Math.floor(Math.random()*(max-min)+min)
}

console.log(getRandom(10, 11))

// date
const now = new Date();
const date1 = new Date('May 11 2018 9:00');
const date2 = new Date(2018,4,11,9,0);