js run on browser or node.js
[namingRuls](https://virgool.io/@mansourihosein/httpsvirgooliomansourihoseinjavascript-naming-conventions-m0m7mx1d2oy2)
#### namingRuls
```jsx
PascalCase
camelCase
snake_case
kebab-case
//
js is Case sensitive
//Boolean
Boolean => use prefix is,are,has
var isVisible = true;
//Function 
Function => use getNameNew
//class and method and private
class => Pascal Case 
method => camel Case =>(getName)
private => underscore (_getName)
//component (react,vuejs)
component =>  Pascal Case 
//const
const HOURS = 60;
//Global
variable =>  camel Case
const => Pascal Case

```
```jsx
// How to create variables:
1. var x; => The var keyword is used in all JavaScript code from 1995 to 2015.
//If you want your code to run in older browser, you must use var.
2. let y; => The let and const keywords were added to JavaScript in 2015.
//If you think the value of the variable can change, use let.
3. const name;
//If you want a general rule: always declare variables with const.

// How to use variables:
x = 5;
y = 6;
let z = x + y;
console.log(z);
```

## Single Line Comments

```jsx
let x = 5; // Declare x, give it the value of 5
let y = x + 2; // Declare y, give it the value of x + 2
```

## Multi-line Comments

```jsx
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

## JavaScript Variables

```jsx
Using var => run in older browser, you must use var.
Using let => variable can change, use let.
Using const => If you want a general rule: always declare variables with const
Using nothing

Always declare JavaScript variables with var,let, orconst.


In this example, price1, price2, and total, are variables:
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

```
```jsx
function start(){
  for(let i=0;i<5;i++){
        console.log(i);
  }
     
// i not definde becuse scope
  console.log(i);
}
start();
//var => Ignore the scope
function start(){
  for(var i=0;i<5;i++){
        console.log(i);
  }
     

  console.log(i);
}
start();

//
var color1 = "red"
//
// window.color1
let color1 = "red"
```

### JavaScript Types

#### JavaScript Types are Dynamic
```jsx
Strings => let name = "zahra" , typeof name
Numbers => let num = 2 ,typeof num
Booleans => let admin = true, typeof admin
Undefined => let name = undefined , or let name 
Empty Values or Null => let name = null
//refrence type
Arrays
Objects
Functions

```

#### typeof
```jsx
let name = "zahra"
typeof name
//
let product = null
typeof product

```
#### js is Dynamic 
```jsx
let name = "zahra"
let name = 1
typeof name is number

```
#### strings
##### JavaScript String Methods
```jsx
//Extracting String Parts
slice(start, end)
substring(start, end)
substr(start, length)
//slice
et str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
//substring
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
//substr
substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.


```
###### Replacing String Content
```jsx
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools")
```
##### Converting to Upper and Lower Case
```jsx
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
//
let text1 = "Hello World!";       
let text2 = text1.toLowerCase(); 

```
##### JavaScript String concat()
```jsx
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
```
#### JavaScript String Padding
```jsx
//padStart
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
padded => '0005'
//JavaScript String padEnd()
let text = "5";
let padded = text.padEnd(4,"0");
padded => "5000"
```
#### JavaScript String split()
```jsx
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
```
#### JavaScript String Search
```jsx
J//avaScript Search Methods
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()
//indexOf
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");
//search
let str = "Please locate where 'locate' occurs!";
str.search("locate");
//includes
let text = "Hello world, welcome to the universe.";
text.includes("world");
//JavaScript String startsWith() and endsWith()
let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)  
```
##### JavaScript Template Literals
```jsx
//Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let text = `Hello World!`;
//Quotes Inside Strings
let text = `He's often called "Johnny"`;
//Multiline Strings
let text =
`The quick
brown fox
jumps over
the lazy dog`;
//Interpolation
${...}
//Variable Substitutions
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;

```
#### JavaScript Number Methods
```jsx
//The parseInt() Method
parseInt("-10.33");
//
Number()
parseFloat()
parseInt()
```
#### JavaScript Array Methods
```jsx
```
#### Object 
```jsx
let name = "zahra";
let age = 26;
let admin = true;
//
let person = {
  name :"zahra",
  age : 26,
  admin : true,

}
console.log(person);
//dot nitation
console.log(person.name);
//bracket notaion
console.log(person["name"]);
```
#### Array
```jsx
let users = ["zahra","sara"]
console.log(users[1])
```
##### length array is Dynamic
```jsx
let users = ["zahra","sara"]
users[2]="sahar";
console.log(users)
```
##### elements and type array is Dynamic
```jsx
let users = ["zahra","sara"]
users[0]="sima";
console.log(users)
//change type
users [1]=2;
console.log(users)
users[3]= true
console.log(users)
```
##### typeof  array is object
```jsx
let users = ["zahra","sara"]
typeof users is Object
```
##### length array
```jsx
let users = ["zahra","sara"]
console.log(users.length)
```
#### Function
```jsx
//camel notation is better
function greet(){
console.log('hello world!')
}
//call
greet()
```

##### Parameters and Arguments  of functions
```jsx
// name is parameter
function greet(name){
console.log('hello'+"" +name)
}
//z is arguments of function
greet("z")
```
`greet("z",20)`
```jsx
// name and age are parameter
function greet(name,age){
console.log("hello"+" "+ name +" "+"you are"+" "+age+" "+"years old")
}
//z and 20  are arguments of function
greet("z",20)
//
let result = greet("z",20)
console.log(result) => //The function has no output
```
#### result function
```jsx
function square(number){
  // let r = number * number;
  // return r
  // or
  return number * number
}
let result = square(4)
console.log(result)

```
### Operators
#### Arithmetic Operators
```jsx
 + - / % ** ++ --
```
```jsx
// + - / % ** ++ --
//Precedence of operators
let x = 5 + 3 * 10;
console.log(x);
//use parentheses
let x = (5 + 3) * 10;
console.log(x);
```
####  Increment ++ 
```jsx
let x = 10;
console.log(x++);
console.log(x) =>10
// x + 1
console.log(++x);
console.log(x) => 11
```
#### JavaScript String Operators
```jsx
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
```
#### Adding Strings and Numbers
```jsx
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
```
#### Assignment Operators
```jsx
= += -= *= /= %= **=
let x = 10;
x += 5;
```

#### JavaScript Comparison Operators
```jsx
//strict equality
== => equal to
=== => 	equal value and equal type
console.log("1"==1)
console.log("1"===1)
//lose equality
!= => not equal
!== => 	not equal value or not equal type

//relational
> => greater than
< => less than
>= => greater than or equal to
<= => less than or equal to
? => 	ternary operator
```
#### JavaScript Logical Operators
```jsx
&& (and), => console.log(true && true)
|| (or) , =>  console.log(true || false)
! (not) , =>  console.log(!true)
//
let proCount = 3;
let proPrice = 1003;
let credit = 1200;
let buy = proCount > 0 || credit> proPrice;
console.log(buy)
```
#### JavaScript Type Operators
```jsx
typeof => Returns the type of a variable
instanceof => Returns true if an object is an instance of an object type
```
#### ternary
` let bottonText = _ ? : _; `
```jsx
let athenticated = true;
//
let bottonText = athenticated === true ? "dashbored" : "login";
console.log(bottonText)
```

## False ,True

```jsx
false => false,undefined,null,"",0,NAn
true => true,1
//
false || 1
false || true || 22
//
true && "zahra" && 21

```

## if ,else

```jsx
if (condition) {
  statement;
  statement;
}
```

```jsx
hour = 12;

if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
```

## Switch Statement

```jsx
let role = "guest";

switch (role) {
  case "guest":
    console.log("guest");
    break;
  case "admin":
    console.log("admin");
    break;
  default:
    console.log("unknown user");
}

or;

if (role === "guest") {
  console.log("guest");
} else if (role === "admin") {
  console.log("admin");
} else {
  console.log("unknown user");
}
```
`2:15`
## for

```jsx
1;
for (let i = 0; i < 5; i++) {
  console.log("hello");
}
//5 times run
2;

for (let i=5;i>0;  i--) {
  console.log("bye");
}

3;
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) console.log(i, "even");
  else console.log(i, "odd");
}
```

## while

```jsx
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## dowhile

```jsx
1;
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 5);

2;
let a1 = 10;
do {
  console.log(a1);
  a1++;
} while (a1 < 5);
```

## for in(object,array)

```jsx
// object(key in person)
//1
const person = { name: "zahra", age: "26" };

for (let key in person) {
  // console.log(key);
  console.log(person[key]);
}
//out
// zahra
// 26
//2
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let key in person) {
  text += person[key];
}
```

```jsx
// Array(index in colors)
const colors = ["red", "green", "blue"];

for (let index in colors) {
  // console.log(index);
  console.log(colors[index]);
}
//out
// red
// green
// blue
```

## for of
It only works for arrays, it doesn't work for objects

```jsx
const colors1 = ["white", "black"];

for (let color of colors1) {
  console.log(color);// show colors
}
```
## Array.forEach()
```jsx
//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
console.log(txt)
```

## break

```jsx
// break
let b = 0;
while (b <= 10) {
  if (b == 5) {
    break;
  }
  console.log(b, "break");
  b++;
}
//out
// 0 'break'
// 1 'break'
// 2 'break'
// 3 'break'
// 4 'break'
```

## continue

```jsx
let d = 0;
while (d < 10) {
  // 5 does not run
  if (d == 5) {
    // Avoid the Infinite Ring
    d++;
    continue;
  }
  console.log(d, "continue");
  d++;
}
//out
// 5 does not run
// 0 'continue'
// 1 'continue'
// 2 'continue'
// 3 'continue'
// 4 'continue'
// 6 'continue'
// 7 'continue'
// 8 'continue'
// 9 'continue'
```

## object

```jsx
let radius = 1;
let x = 1;
let y = 1;

let circle = {
  radius: 1,
  // x:1,
  // y:1,
  location: {
    x: 1,
    y: 1,
  },
  isVisiable: true,
  draw: function () {
    console.log("draw");
  },
};

// method
circle.draw();
```
## create object
```jsx
1- Factory function => camelCase
2- Constructor function => PASCAL
```
## Factory function(create object)

- camelnotation:oNeTwoThree

```jsx
function createCircle(radius) {
  return {
    radius: radius,
    draw :function() {console.log("draw")}
    
  };
}
// new js 
function createCircle(radius) {
  return {
    // radius: radius, => radius because key ,value are the same
    radius,
    // draw :function() {console.log("draw")}
    draw() {
      console.log("draw");
    },
  };
}

let circle1 = createCircle(1);
console.log(circle1);

let circle2 = createCircle(2);
console.log(circle2);

const myCircle = createCircle(3)
```

## Constructor function(create object)

- pascal notation:ONeTwoThree

```jsx
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(3);
```

## point(The difference between Factory and Constructor )
```jsx
// Factory function
1.camel notation:oNeTwoThree
2.return

// Constructor function
1. pascal notation:ONeTwoThree
2. new (this)

```

## JavaScript object are Dynamic(add property or mehod or del property or method)
```jsx
const circle2000 = {
  radius:1
}
console.log(circle2000)
//add property
circle2000.color = "red"
console.log(circle2000)
//add method
circle2000.draw= function() {
  
}
console.log(circle2000)


// delete object
//del property
delete circle2000.color;
//del method
delete circle2000.draw
console.log(circle2000)

```

## constructor

* point => function is object
```jsx
let number = 12
// let number = new Number(12)

// factory is object (constructor function inside js)
console.log(myCircle.constructor);
// Constructor function
console.log(circle3.constructor);


```
### object litral
```jsx
//by constructor object
let x = {}
//  let x = new object()
let name = "z"
// let name = new String("z")
let x = true;
// let x = new Boolean(true)
let number = 12
// let number = new Number(12)
const circle 1 = new circle(3);
// const circle1 = new function(){}
```

## function property
```jsx
// factory func
// blue after . is property
console.log(myCircle.radius)

// constructor func
// blue after . is property
console.log(Circle.length)
console.log(Circle.name)

```

## function method

```jsx
* call=> Circle.call(3)
//const another = new Circle(3)
* apply => Circle.apply({},[9])

```
### copy by value => value types and copy by adress => reference types
## value types(primitive)
```jsx
Number
String
Boolean
Symbol
Undifined
Null
//copy by value => value types
```

## Reference types
```jsx
Object
Function is object
Array    is object
//so primitive and objects
//copy by adress => reference types
```

### example 1(value)
## value types is dynamic and their value is independent of each other
```jsx
let xz = 10;
let bz = xz;
// copy xz in bz
console.log(bz) 
// out = > 10
xz = 20;
console.log(xz)
// out = > 20
console.log(bz)
// out = > 10
//Their value(xz and bz) is independent of each other
```
### example 2(reference)
## Reference types is dynamic and refer to the address of exactly one house of memory

```jsx
let xb = {value:10};
let yb = xb ;
xb.value = 20;
console.log(xb);
//out => 20
console.log(yb);
//out => 20 => copy adress xb in yb
//because They refer to the address of exactly one house of memory
```
### example 3
##  value types and scope
```jsx
let number = 10;
function increase(number) {
  number++
}
increase(number);
console.log(number);
//out => 10 =>copy value
```
### example 4
##  Reference types and scope

```jsx
let obj = { value: 10 };
function increase(obj) {
  obj.value++
}
increase(obj);
console.log(obj);
// out => 11 => copy adress
```


## for in  objects

```jsx
const circleBlue = {
  radius:1,
  draw(){console.log('darw')}
}

console.log(circleBlue)

//key
for(let key in circleBlue){  
  console.log(key)}
  //out=> 
  //radius
  // draw


//value
for(let key in circleBlue){  
  console.log(circleBlue[key])
 }
 //out
  // 1
  // ƒ draw(){console.log('darw')}
```
## for of It only works for arrays, it doesn't work for objects
## for of (iterable)
* object is not iterable
* array is iterable

```jsx
// for of 
for (let key of circleBlue) {
  console.log(key);
}
//object is not iterable
```

### solution for (for of) => use Object.keys() you have aray
### Object.keys()
```jsx
let circlekeys = Object.keys(circleBlue)
console.log(circlekeys)

// out => (2) ['radius', 'draw'] => array
//solution
// for of
for (let key of circlekeys) {
  console.log(key);
}
//because circlekeys is array
```
### Object.entries
```jsx
let ci = Object.entries(circleBlue)
console.log(ci);
for (let entry in ci){
  console.log(entry);
}
```
### if 
```jsx
if ('radius'in circleBlue){
  console.log('yes')
}
```
## clone object
It means to copy all the properties in another object
beacuse another and circle independent of each other
### solution 1
```jsx
// clone object
const circleA = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}
//solution
//another and circle independent of each other
// 1. use {} and for in 
const another = {};

for (let key in circleA) {
  another[key] = circleA[key]
}
console.log(another);
//value
// another['radius'] = circleA['radius'] => 1 = 1
//out 
// {radius: 1, draw: ƒ}
```
### solution 2
```jsx
const circleB = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}
// 2.
const another = Object.assign({color:'red'},circleB)
console.log(another);
```
### solution 3(best solution) 
```jsx
// 3.best solution
const circleC = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}
//spread
const another = {...circleC}
console.log(another);
//or 
const another = {location:1,...circleC,color:'red'}
console.log(another);
//out
// {location: 1, radius: 1, color: 'red', draw: ƒ}
```

## Garbage collection

The JavaScript garbage collector runs automatically, keeps track of memory locations, and determines which memory locations are free (i.e., safe for reuse). The garbage collector uses the mark and sweep algorithm with some optimizations.


## math
```jsx
* Math.PI
* Math.random()
* Math.round(1,2)
* Math.max(1,2,10)
* Math.min(1,2,7)
* Math.abs(-1)
```
## string
### string primitive
```jsx
let message = 'working on project';
typeof message
message.length
message.includes('e')
message.startsWith('m')
message.endssWith('e')
//find index => indexOf If it doesn't find it, it gives -1
message.indexOf('on')
let message = message.replace('project','listening')
message.toUpperCase()
message.toLowerCase()
//trim => Remove the beginning and end spaces
message.trim()
message.trimLeft()
message.split('')
let message = 'working-on-project';
message.split('-')
// scape notation
const message = 'her name.\'is sahar';
const message = 'her name.\n is sahar';
```
### string object
```jsx
const abc = new String('name')
typeof abc => object
```
## template litreal

```jsx
1.
const adc = `'working' .
on proj
`;
console.log(adc)
2.
// without template
let name = 'ali';
let msg = 'hi '+name+'.thanks';
console.log(msg)
// with template 
let name = 'ali';
let msg = `hi ${name}.thanks`;
console.log(msg)
```

## Date
```jsx
const now = new Date();
const date1 = new Date('May 11 2018 9:00');
const date2 = new Date(2018,4,11,9,0);

now.toDateString()
now.toISOString
now.getDate()
// day of week
now.getDay()
now.gatFullYear()
now.setFullYear()
now.getMonth()

date1.toDateString()
date1.getDay()
```
## Array
### add to array(push,unshift,splice)
```jsx
const numbers = [3,4];
console.log(numbers)
//add end of array
numbers.push(5,6)
console.log(numbers)
//add start of array
numbers.unshift(5)
console.log(numbers)
//add between 2 => index of start, 0=> remove
numbers.splice(2,0,"a")
```

### search on array
#### perimiteve
```jsx
// perimiteve
const numbers = [1,2]
//The first number it finds is returned
//return location
console.log(numbers.indexOf(1)) => true => indexOof,false=> -1
// find 1 from 1
console.log(numbers.includes(1,1))

console.log(numbers.lastIndexOf(1))
//return true or false
console.log(numbers.includes(1))
```
#### refrence
```jsx
// refrence
// includes
//array with object elements
const numbers = [
  {id:1,name:'a'},
  {id:2,name:'b'},
  
]
//point 
console.log(numbers.includes({id:1,name:'a'}))
return false
//include return  f or t => f beacuse it reference type and checked adress
//out => f (adress)
```
#### solution
```jsx
// find
const courses = [
  {id:1,name:'a'},
  {id:2,name:'b'},
  
]
const result = courses.find(function(course){
  return course.name === "a"
})
console.log(result);
//return first element have this condition
result=>{id: 1, name: 'a'}
//find(return element)
const array = [5,10,20]
const f = array.find(e => e > 10)
console.log(f)
f=>20
```
### The difference between find and findIndex
find(return element)
findIndex(return index)
```jsx
// findIndex(return index)
const courses = [
  {id:1,name:'a'},
  {id:2,name:'b'},
  
]
const result = courses.findIndex(function(course){
  return course.id === 2
})
console.log(result);
result=> 1
```

## arow function
```jsx
()=>{}
// find
const courses = [
  {id:1,name:'a'},
  {id:2,name:'b'},
  
]
const result = courses.find(course=>course.name === "a")

console.log(result);
{id: 1, name: 'a'}
```
### array
## remove of array(pop,shift,splice)
```jsx
const numbers = [1,2,3,4,5,6]
numbers.pop();
console.log(numbers);
// removed last element and change basic array
//last
const last = numbers.pop();
console.log(last);

//first
// removed first element and change basic array
numbers.shift();

// between
numbers.splice(2,1)
```

## reasign and remove
```jsx
// 1
const numbers = [1,2,3,4]
numbers = []
console.log(numbers) =>error //(reasign)
// 2
// fix above code and remove(const to let)
let numbers =[1,2,3,4]
numbers = []
console.log(numbers)
// 3
let numbers = [1,2,3,4]
let another = numbers
numbers = []
console.log(numbers)
console.log(another) //refrence type
//solution
numers.length = 0
console.log(numbers)
console.log(another)
// 4
// 0=> start to end(numbers.length)
numbers.splice(0,numbers.length);
console.log(numbers)
console.log(another)
```
## concat
```jsx
const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
console.log(combined);
```
## slice
```jsx
const combined = [1,2,3,4,5,6];
// 2 => index of start ,4 => index of end
const slice = combined.slice(2,4);
//[3,4]
const slice = combined.slice(2);
//[3,4,5,6]
//slice without input => copy
// copy
const slice = combined.slice();
console.log(slice);
```
## concat(refrence type)
```jsx
const first = [{id:1}];
const second = [4,5,6];
const combined = first.concat(second);
first[0].id = 10;
console.log(first);
// [{id:10},4,5,6]
console.log(combined);
// [{id:10},4,5,6]
```
## combined(spread),slice
```jsx
const first = [{id:1}];
const second = [4,5,6];
//spread
const combined = [...first,...second];
const combined = ['a',...first,...second];
//slice without input => copy
//copy 
const slice = [...combined]
console.log(slice)

```
## for,forEach Array
```jsx
// for
const numbers = [1,2,3,4];
for (let number of numbers)
    console.log(number);

// forEach
const numbers = [1,2,3,4];
numbers.forEach(function(number){
  console.log(number);
})
// arrow func
numbers.forEach(number=>console.log(number));
// 
numbers.forEach((number,i)=>console.log(i,number));
```
## join Array
```jsx
const numbers = [1,2,3,4];
const joined = numbers.join();
const joined = numbers.join('');
const joined = numbers.join(' ');
console.log(joined)
```
## split,join String
```jsx
const message = 'coding is cool'
const parts = message.split(' ');
console.log(parts);
const combined = parts.join('-');
console.log(combined)
// use in url
```
## sort,reverse Array
```jsx
// sort => numbers and string
const numbers = [1,4,3,2];
numbers.sort();
console.log(numbers);
// reverse
const numbers = [1,4,3,2];
const reverse = numbers.reverse();
console.log(reverse);
```
## object sort
The main stem should be arranged
```jsx
const numbers = [
{id:1,name :'html'},
{id:2,name :'css'}
];
numbers.sort(function(a,b){
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if(nameA < nameB) return -1;
  if(nameB > nameA) return 1;
  return 0;
});
```

## every on Array(return true or false)
```jsx
const numbers = [1,2,3,-1];
const alllpositive = numbers.every(function(value,index,array){
  return value >= 0;
})
console.log(alllpositive);
//arrow func
const numbers = [1,2,3,-1];
const alllpositive = numbers.every((value,index,array)=>value >= 0);
console.log(alllpositive);
//return false
```

## some on Array(return true or false)
It will be finished for an ok element
```jsx
const numbers = [1,2,3,-1];
const all = numbers.some(function(value){
  return value >= 0;
})
console.log(all);
//arrow func
const numbers = [1,2,3,-1];
const all = numbers.some((value)=>value >= 0);
console.log(all);
//return true
```
## filter on Array
```jsx
const numbers = [1,-1,2,3];
const filter = numbers.filter(function(value){
  return value >= 0;
})
console.log(filter);
// out
// [1,2,3]

// arrow func
const numbers = [1,-1,2,3];
const filter = numbers.filter(v => v>=0);
console.log(filter);
//[1,2,3]
```
### filter on Object
```jsx
// filter on object
const users = [
  {name:'a',age:20},
  {name:'b',age:15},
  {name:'c',age:14},
  {name:'d',age:28},

]
const result= users.filter(user => user.age>=18);
console.log(result);
//0: {name: 'a', age: 20}
// 1: {name: 'd', age: 28}

```
## map

```jsx
// 1.
const numbers = [1,3,5,7]
const result = numbers.map(function(value){
  return value *2;
})
console.log(result);
//[2, 6, 10, 14]
//arrow func
const numbers = [1,3,5,7]
const result = numbers.map((value)=>value *2)
console.log(result);
// 2.
const products = ['html','css','js'];
const items = products.map(function(product){
  return `<li>${product}</li>`

})
console.log(items);
//['<li>html</li>', '<li>css</li>', '<li>js</li>']
// 
const html = items.join('');
console.log(html);
// 
const html = `<ul>${items.join}</ul>`
console.log(html);
// 3.
const products = ['html','css','js'];
const items = products.map(function(product){
  cosnt obj = {value :product}
  return obj

})
console.log(items);
// 
const items = products.map(product=>({value:product}));
console.log(items)
```
## filter,map
```jsx
const numbers = [1,-1,2,3]
const items = numbers
.filter((v)=>v>=0)
.map((n)=>({value:n}));
console.log(items);
//
// 0: {value: 1}
// 1: {value: 2}
// 2: {value: 3}

```
## this

#### method
this refer to object
```jsx
const video = {
  title : 'a',
  //method => this -> object
  paly(){
    console.log(this);
  }
  stop(){
    console.log(this);
  }
}
video.play()
//out
//title: 'a', paly: ƒ}
```
#### function
this in function refer to global
global object in browser => window
global object in node => global

```jsx
function playVideo(){
  console.log(this);
}
//
playVideo()
//out
//playVideo()
// Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
```
#### constructor function
this refer to new object
```jsx
function Video(title){
  this.title = title;
  console.log(this)
}
const v = new Video ("abc");
//out
//Video {title: 'abc'}
//empty object => title ,this => title
new => 
1.create new empty object, 
2.this => refer to empty object 
3.return this

```
##### this in callback function refer to window
```jsx
const video = {
  title : "a",
  tags : ["a","b","c"],
  //this refer to window
  showTags(){
    this.tags.forEach(function(tag){
       console.log(this,tag);
    })
  },
}
video.showTags();
// out
//a
//b
//c
```
#### solution => this refer to object video
```jsx
//solution
const video = {
  title : "a",
  tags : ["a","b","c"],
  //this refer to video
  showTags(){
    this.tags.forEach(function(tag){
       console.log(this,tag);
    },this)
  },
}
video.showTags();
//out => this refer to video
// {title: 'a', tags: Array(3), showTags: ƒ} 'a'
//{title: 'a', tags: Array(3), showTags: ƒ} 'b'
//{title: 'a', tags: Array(3), showTags: ƒ} 'c'
```
### function Declaration
#### point call func before create => hoisting
```jsx
//point call func before create => hoisting
walk();
function walk(){
  console.log("walk")
}
```
#### function Expression
```jsx
let run = function(){console.log("run");};
run();
let move = run;
console.log(move())
```

#### hoisting(point call func before create)
##### function Declaration
```jsx
//point call func before create
walk();
function walk(){
  console.log("walk")
}
```
### Arguments
```jsx
function sum(a,b){
  console.log(arguments)
  return a+b;
}
//Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
console.log(sum(1,2))
//Nan => not a number
console.log(sum(1)) //1 + Nan = Nan
console.log(sum()) // Nan
//
console.log(sum(1,2,3)) //out => 3
```
### The user can send any arguments of numbers ,we return sum of numbers
```jsx
//
function sum(){
  console.log(arguments);
  let sum = 0;
  //point
  //for of work on array and map(dont work on object)
  //this object has a iterartor
  for(let value of arguments)
    sum += value;
  return sum;
  
}
console.log(sum(1,2,3,6))
//out => 12
```
#### Reduce
```jsx
//for of work on array
const numbers = [1,-1,2,3];
let su = 0;
for(let n of numbers)
   su += n;
console.log(su) 
//out => 5
//
const numbers = [1,-1,2,3];
let sum1 = numbers.reduce(function(accumultor,currentValue){return accumultor+currentValue },0)
console.log(sum1)
// a = 0 ,c = 1 => a = 1
// a = 1 ,c = -1 => a = 0
// a = 0 ,c = 2 => a = 2
// a = 2,c = 3 => a = 5 
// with out second element
const numbers = [1,-1,2,3];
let sum1 = numbers.reduce(function(accumultor,currentValue){return accumultor+currentValue })
console.log(sum1)
// a = 1 ,c = -1 => a =0
```

### default parameter
```jsx
function interest(p,rate=3.5,years=5){
  return ((p * rate)/100)* years;
}

console.log(interest(10000,2))
```
### getter,setter
```jsx
const person = {
  fname :'ali',
  lname :'rad'
};
console.log(`${person.fname} ${person.lname}`)
// method
const person = {
  fname :'zahra',
  lname :'farrokhi',
  fullname(){
    return `${person.fname} ${person.lname}`;
  }
};
console.log(person.fullname());
//getters => access properties
// setters => chhange(mutate)
const person = {
  fname :'zahra',
  lname :'farrkhi',
  get fullname(){
    return `${person.fname} ${person.lname}`;
  },
  set fullname(value){
    const parts = value.split(' ');
    this.fname = parts[0];
    this.lname = parts[1];
  }
};
//set
person.fullname = "zahra farrokhi";
//get
console.log(person.fullname);

```

### Rest
```jsx
function sum(...args){
  console.log(args);
}
console.log(sum(1,2,3,6))
//sum with reduce
function sum(...args){
  console.log(args);
  return args.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,6))
//out => 12
//
function AdC(discount,...args){
  
  const s = args.reduce((a,b)=>a+b)
  return s*(1-discount)
}
console.log(AdC(0.5,1,2,3,6))
//out => 6
```
### scope
```jsx
{
const msg = "hello"
}
//msg is not defined
console.log(msg)
//
function start(){
  const msg = "hello"
}
//msg is not defined
console.log(msg)
//
function start(){
  const msg = "hello"
  for(let i=0;i<5;i++){
    console.log(i)
  }
   console.log(i)
}
//i is not defined
console.log(start())
```
### global
```jsx
const color = "red"
function start(){
    // console.log(color)
    const color = "blue";
    console.log(color);
}
// console.log(color);
start();
//
function getAge(){
  let age = 18;
  if(true){
    console.log(age);
  }
}
getAge()
//
function getAge(){
  let age = 18;
  if(true){
    age = 20
    console.log(age);
  }
   console.log(age);
}
getAge()
```
### try cache

```jsx
const person = {
  fname :'zahra',
  lname :'farrkhi',
  get fullname(){
    return `${person.fname} ${person.lname}`;
  },
  set fullname(value){
    if (typeof value !== 'string')
      // return;
      throw new Error('value is not a string');
    // const e = new Error();
    // throw e
    const parts = value.split(' ');
    this.fname = parts[0];
    this.lname = parts[1];
  }
};
try{
  person.fullName = true;
}
catch(e){
  console.log(e);
}
```

### this
```jsx
function playVideo(){
  console.log(this);
}
playVideo();
// Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
playVideo.call({name:"z"});
// {name: 'z'}
playVideo.apply({name:"z"});
// {name: 'z'}
const fn = playVideo.bind({name:"z"});
fn();
// {name: 'z'}
```

### object oriented programming
```jsx
//incapsulation
let baseSalary = 30000;
let overTime =10;
let rate = 20;

function getWage(baseSalary,overTime,rate){
  return baseSalary + (overTime * rate)
}

//
let employee = {
  baseSalary : 30000,
  overTime : 10,
  rate :20,
  //with out parameter
  getWage(){
    return this.baseSalary + (this.overTime + this.rate);
  }
}
//abstraction
function Circle(radius){
  this.radius = radius;
  this.defaultLocation = {x:0,y:0};
  this.computeOptimumLocation = function (factor){
      //...
  }
  this.draw = function(){
    this.computeOptimumLocation();
    console.log('draw');

   
  }
}
const circle = new Circle(10);
Circle.computeOptimumLocation(2)
```
