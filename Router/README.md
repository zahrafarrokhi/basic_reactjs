## install react
```jsx
sudo npm i -g create-react-app
create-react-app hello-word
cd hello-word
npm run start

```
### router

```jsx

npm i react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
```
### Point(Switch => Routes)
```jsx
In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import

import { Switch, Route } from "react-router-dom";
to

import { Routes ,Route } from 'react-router-dom';

```

Then you can config router in index.js:

```jsx 
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Products data={ProductsJSON} />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="product" >
          <Route path=":pid" element={<Product/>}/>
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```

If you want to use nested routes like above you need to use `<Outlet/>` to access the current page.

```jsx

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

```

You can use useParams to access url paramteres.



### Event

```jsx
//contact.jsx

 const handleChangeInputSubject = (event) => {
    console.log(event.target.value);
  };

 const handleSubmit = () => {
    console.log("submit");
  };

<div className="formControl">
        <input
          type="text"
          placeholder="subject"
          // onChange={(event)=>(console.log(event))}
          // onChange={(event)=>(console.log(event.target.value))}
          onChange={handleChangeInputSubject}
        />
</div>
 <div className="formControl">
        <Button handleClick={handleSubmit}>Submit</Button>
 </div>

```
#### props(event with default)
```jsx

import './Button.css';
const Button = ({children,handleClick = () => {}}) => {
  return (<button onClick={ handleClick} className='button'>{children }</button> );
}
 
export default Button;
```


### state

```jsx
1.import React, { useState } from 'react'
2.const [subject, setSubject] = useState('');
//setSubject
3.
 const handleChangeInputSubject = (event) => {
     setSubject(event.target.value);
  };
 <input
    type="text"
    placeholder="subject"         
    onChange={handleChangeInputSubject}
  />
```
```jsx

import React, { useState } from 'react'
import Button from "../Button/Button";

const Contact = () => {
  const [subject, setSubject] = useState('');
  
  const handleChangeInputSubject = (event) => {
     setSubject(event.target.value);
  };
  
  console.log("subject",subject)

  return (
    <div className="Contact">
      <div className="formControl">
        <input
          type="text"
          placeholder="subject"         
          onChange={handleChangeInputSubject}
        />
      </div>   
    </div>
  );
};

export default Contact;


```

### validation

```jsx
1.
//src/utils/validation.js
const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateSubject = (subject) => subject.length > 8;

export { validateEmail, validateSubject };

```

```jsx
2.
const [errors,setErrors] = useState({});

const handleChangeInputSubject = (event) => {
  if (validateSubject(event.target.value)) {
    setSubject(event.target.value);
    setErrors({
      ...errors,
      subject: null,
    });
  } else {
    setErrors({
      ...errors,
      subject: "Subject must be more than 8 characters",
    });
  }
};

```

```jsx
3.
 <div className="formControl">
    <input
          type="text"
          placeholder="subject"
          onChange={handleChangeInputSubject}
        />
    {errors.subject && <span>{errors.subject}</span>}
 </div>

```