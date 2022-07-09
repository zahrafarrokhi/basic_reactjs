import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// jsx to reactelement
// const element = <h1>hello world</h1>
// const element = React.createElement("h1", null, " hello world ");
// ReactDOM.render(element,document.getElementById('root'));


// 2.
// class
// import App from './app';
// func
import App from './components/functional/app';
ReactDOM.render(<App />, document.getElementById('root'));


// 3.
// console.log('test')


// 4.
// console.log()
import talk,{ walk } from './person';
walk()
// export default 
talk()   

// *********************
// classComponent
// 5.
// Product0
// import Product0 from './components/Product0';
// ReactDOM.render(<Product0 />, document.getElementById('root'));

// Product1
// import Product1 from './components/Product1';
// ReactDOM.render(<Product1 />, document.getElementById('root'));

// Product2
// import Product2 from './components/Product2';
// ReactDOM.render(<Product2/>,document.getElementById('root'));

// Product2Json
import Product2Json from './components/Product2Json';
ReactDOM.render(<Product2Json/>,document.getElementById('root'));

// Product3
// import Product3 from './components/Product3';
// ReactDOM.render(<Product3 />, document.getElementById('root'));

// Product4
// import Product4 from './components/Product4';
// ReactDOM.render(<Product4 />, document.getElementById('root'));

// Product5
// import Product5 from './components/Product5';
// ReactDOM.render(<Product5/>,document.getElementById('root'));


// Product6
// import Product6 from './components/Product6';
// ReactDOM.render(<Product6 />, document.getElementById('root'));

// Product7
// import Product7 from './components/Product7';
// ReactDOM.render(<Product7 />, document.getElementById('root'));


// products
// import Products from './components/Products';
// ReactDOM.render(<Products />, document.getElementById('root'));



// **********************
// function Component
// import Product from './components/functional/Product';
// ReactDOM.render(<Product />, document.getElementById('root'));

// import Products from './components/functional/Products';
// ReactDOM.render(<Products />, document.getElementById('root'));


